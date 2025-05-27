import { useState, useEffect } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Cart from "./cart";
import Catalog from "./Catalog";
import WelcomeModal from "./WelcomeModal";
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  weight: number;
  flavor: string;
}
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);

  const addToCart = (product: Product) => {
    const updatedCart = [...(cart || []), product];
    setCart(updatedCart);
  };
  const welcome = () => {
    setIsOpen(true);
    setCart([]);
  };
  useEffect(() => {
    fetch("shop-list.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <Router>
        <WelcomeModal isOpen={isOpen} closeModal={closeModal} />
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={welcome}>
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/cart">Корзина</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Catalog addToCart={addToCart} products={products} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart!} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
