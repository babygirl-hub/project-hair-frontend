const products = [
  { id: 1, name: 'Body Wave Bundle', price: '$120', image: '/bundle1.jpg' },
  { id: 2, name: 'Straight Lace Wig', price: '$250', image: '/wig1.jpg' },
  { id: 3, name: 'Curly Closure', price: '$90', image: '/closure1.jpg' },
];

export default function ProductList() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
