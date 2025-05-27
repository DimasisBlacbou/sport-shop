import type { Product } from "./App";
interface cardComponentProps {
  product: Product;
  addToCart: (product: Product) => void;
}
function CardComponent({ product, addToCart }: cardComponentProps) {
  return (
    <div className="product-card">
      <img className="Img" src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Цена: {product.price} руб.</p>
      <p>Вес: {product.weight} кг</p>
      <p>Вкус: {product.flavor}</p>
      <p className={product.inStock ? "in-stock" : "out-of-stock"}>
        {product.inStock ? "В наличии" : "Нет в наличии"}
      </p>
      <button onClick={() => addToCart(product)} disabled={!product.inStock}>
        {product.inStock ? "Добавить в корзину" : "Нет в наличии"}
      </button>
    </div>
  );
}
export default CardComponent;
