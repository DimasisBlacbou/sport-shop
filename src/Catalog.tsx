import type { Product } from "./App";
import CardComponent from "./card-component";
interface CatalogProps {
  products: Product[];
  addToCart: (product: Product) => void;
}
function Catalog({ products, addToCart }: CatalogProps) {
  return (
    <div className="App">
      <h1>Магазин спортивного питания</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardComponent
            product={product}
            addToCart={addToCart}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Catalog;
