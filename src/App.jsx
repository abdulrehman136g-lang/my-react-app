import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    category: "Shoes",
    price: 59,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 79,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 4,
    name: "Classic T-Shirt",
    category: "Clothing",
    price: 29,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 5,
    name: "Backpack",
    category: "Accessories",
    price: 45,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 35,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 7,
    name: "White Sneakers",
    category: "Shoes",
    price: 65,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
  },
  {
    id: 8,
    name: "Denim Jacket",
    category: "Clothing",
    price: 89,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },
  {
    id: 9,
    name: "Laptop",
    category: "Electronics",
    price: 899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 10,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
  },
  {
    id: 11,
    name: "Sports Shoes",
    category: "Shoes",
    price: 72,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
  {
    id: 12,
    name: "Hoodie",
    category: "Clothing",
    price: 55,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
  {
    id: 13,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 69,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    id: 14,
    name: "Cap",
    category: "Accessories",
    price: 22,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },
  {
    id: 15,
    name: "Basketball Shoes",
    category: "Shoes",
    price: 95,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
  },
  {
    id: 16,
    name: "Casual Shirt",
    category: "Clothing",
    price: 42,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab",
  },
  {
    id: 17,
    name: "Tablet",
    category: "Electronics",
    price: 399,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
  },
  {
    id: 18,
    name: "Travel Bag",
    category: "Accessories",
    price: 68,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7",
  },
  {
    id: 19,
    name: "Boots",
    category: "Shoes",
    price: 110,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
  },
  {
    id: 20,
    name: "Jeans",
    category: "Clothing",
    price: 49,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  },
  {
    id: 21,
    name: "Camera",
    category: "Electronics",
    price: 699,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 22,
    name: "Leather Belt",
    category: "Accessories",
    price: 32,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
  },
  {
    id: 23,
    name: "Hiking Shoes",
    category: "Shoes",
    price: 85,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
  },
  {
    id: 24,
    name: "Sweater",
    category: "Clothing",
    price: 58,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
  },
  {
    id: 25,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 75,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  },
  {
    id: 26,
    name: "Handbag",
    category: "Accessories",
    price: 95,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 27,
    name: "Slip-On Shoes",
    category: "Shoes",
    price: 54,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 28,
    name: "Polo Shirt",
    category: "Clothing",
    price: 38,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1625910513413-5fc45b8d6a2b",
  },
  {
    id: 29,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 89,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 30,
    name: "Wrist Watch",
    category: "Accessories",
    price: 125,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 31,
    name: "Football Shoes",
    category: "Shoes",
    price: 88,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26",
  },
  {
    id: 32,
    name: "Black Jacket",
    category: "Clothing",
    price: 105,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
  },
  {
    id: 33,
    name: "Smartphone",
    category: "Electronics",
    price: 599,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 34,
    name: "Travel Backpack",
    category: "Accessories",
    price: 72,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
  },
  {
    id: 35,
    name: "Canvas Shoes",
    category: "Shoes",
    price: 48,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684",
  },
  {
    id: 36,
    name: "Summer Dress",
    category: "Clothing",
    price: 64,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
  },
  {
    id: 37,
    name: "Computer Mouse",
    category: "Electronics",
    price: 35,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 38,
    name: "Black Backpack",
    category: "Accessories",
    price: 59,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7",
  },
  {
    id: 39,
    name: "Running Sneakers",
    category: "Shoes",
    price: 76,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 40,
    name: "Casual Hoodie",
    category: "Clothing",
    price: 62,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    return searchMatch && categoryMatch;
  });

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row gap-4 justify-between items-center">

          <h1 className="text-3xl font-bold text-gray-800">
            My Store
          </h1>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            🛒 Cart ({cart.length})
          </button>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our Products
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Choose your favorite product
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔎 Search products..."
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-lg font-semibold transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Product Count */}
        <div className="mb-6 text-gray-600">
          Showing{" "}
          <span className="font-bold">
            {filteredProducts.length}
          </span>{" "}
          products
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                {/* Category */}
                <p className="text-sm text-blue-600 font-semibold">
                  {product.category}
                </p>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-400 text-lg">
                    ★★★★★
                  </span>

                  <span className="text-gray-600 font-semibold">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-gray-800 mt-4">
                  ${product.price}
                </p>

                {/* Add Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                >
                  🛒 Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700">
              No products found
            </h3>

            <p className="text-gray-500 mt-2">
              Try another product name.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;