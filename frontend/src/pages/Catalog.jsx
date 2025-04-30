const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

function Catalog({ addToCart }) {
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Add product with default quantity of 1
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Catalog</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;