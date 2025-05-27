import { useState } from "react";
import type { Product } from "./App";
import OrderModal from "./OrderModal";
interface CartProps {
  cart: Product[];
  setCart: (cart: Product[]) => void;
}
function Cart({ cart, setCart }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const clearCart = () => {
    setCart([]);
    console.log("Корзина очищена");
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const makeOrder = () => {
    setIsOpen(true);
    setCart([]);
  };
  return (
    <div className="cart">
      <OrderModal isOpen={isOpen} closeModal={closeModal} />
      <h2>Корзина</h2>
      {cart.length > 0 ? (
        <>
          <ul className="scrol">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} руб.
              </li>
            ))}
          </ul>
          <p>Общая стоимость: {totalPrice} руб.</p>
          <button onClick={clearCart}>Очистить корзину</button>
          <button onClick={makeOrder}>оформить заказ</button>
        </>
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
}
export default Cart;
