function Products() {
  const products = [
    { id: 1, name: "Premium Dog Food" },
    { id: 2, name: "Dog Leash" },
    { id: 3, name: "Dog Bed" },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              High-quality product for your dog.
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;