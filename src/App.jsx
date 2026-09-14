import { useState } from "react";

const products = [
  {
    name: "Modern Sofa",
    category: "Sofa",
    price: "$499",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Chair",
    category: "Chair",
    price: "$249",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wooden Coffee Table",
    category: "Table",
    price: "$189",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Modern Bed",
    category: "Bedroom",
    price: "$699",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Comfort Sofa",
    category: "Sofa",
    price: "$579",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Armchair",
    category: "Chair",
    price: "$299",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dining Table",
    category: "Table",
    price: "$399",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "King Size Bed",
    category: "Bedroom",
    price: "$799",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("default");

  // CATEGORY FILTER
  const categoryProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  // PRICE SORTING
  const filteredProducts = [...categoryProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace("$", ""));
    const priceB = parseInt(b.price.replace("$", ""));

    if (priceSort === "low") {
      return priceA - priceB;
    }

    if (priceSort === "high") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-stone-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f5f0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold">
            Furni<span className="text-amber-700">Co.</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="hover:text-amber-700">
              Home
            </a>

            <a href="#shop" className="hover:text-amber-700">
              Shop
            </a>

            <a href="#about" className="hover:text-amber-700">
              About
            </a>

            <a href="#contact" className="hover:text-amber-700">
              Contact
            </a>
          </div>

          <a
            href="#shop"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Shop Now
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section id="home">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

          <div>

            <p className="font-semibold uppercase tracking-[4px] text-amber-700">
              Modern Furniture
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Make Your
              <br />
              Home <span className="text-amber-700">Beautiful.</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              Discover beautiful furniture designed to make your home
              comfortable, stylish and modern.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#shop"
                className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Explore Collection →
              </a>

              <a
                href="#about"
                className="rounded-full border border-stone-300 px-7 py-4 font-semibold hover:border-blue-600 hover:text-blue-600"
              >
                Learn More
              </a>

            </div>

            <div className="mt-10 flex gap-12">

              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-sm text-stone-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-sm text-stone-500">
                  Customer Rating ⭐
                </p>
              </div>

            </div>

          </div>


          <div>

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
              alt="Modern furniture"
              className="h-[500px] w-full rounded-[35px] object-cover shadow-2xl md:h-[600px]"
            />

          </div>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <p className="font-semibold uppercase tracking-[3px] text-amber-700">
            Categories
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Shop By Category
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🛋️", "Sofas", "Sofa"],
              ["🪑", "Chairs", "Chair"],
              ["🛏️", "Bedroom", "Bedroom"],
              ["🪵", "Tables", "Table"],
            ].map(([icon, title, value]) => (

              <button
                key={title}
                onClick={() => {
                  setCategory(value);

                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-3xl bg-[#f7f5f0] p-8 text-left transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-5xl">
                  {icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-stone-500">
                  Explore collection →
                </p>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* PRODUCTS */}
      <section id="shop" className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-amber-700">
                Our Collection
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                Featured Furniture
              </h2>

              <p className="mt-2 text-stone-500">
                {filteredProducts.length} products found
              </p>

            </div>


            {/* FILTERS */}
            <div>

              {/* CATEGORY BUTTONS */}
              <div className="flex flex-wrap gap-2">

                {[
                  "All",
                  "Sofa",
                  "Chair",
                  "Table",
                  "Bedroom",
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={
                      "rounded-full px-5 py-2.5 font-semibold " +
                      (category === item
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-blue-100")
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>


              {/* PRICE SORT */}
              <div className="mt-4 flex flex-wrap gap-2">

                <button
                  onClick={() => setPriceSort("low")}
                  className={
                    "rounded-full px-5 py-2.5 font-semibold " +
                    (priceSort === "low"
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100")
                  }
                >
                  Price: Low → High
                </button>


                <button
                  onClick={() => setPriceSort("high")}
                  className={
                    "rounded-full px-5 py-2.5 font-semibold " +
                    (priceSort === "high"
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100")
                  }
                >
                  Price: High → Low
                </button>


                <button
                  onClick={() => setPriceSort("default")}
                  className={
                    "rounded-full px-5 py-2.5 font-semibold " +
                    (priceSort === "default"
                      ? "bg-blue-600 text-white"
                      : "bg-white hover:bg-blue-100")
                  }
                >
                  Default
                </button>

              </div>

            </div>

          </div>


          {/* PRODUCT CARDS */}

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {filteredProducts.map((product) => (

              <div
                key={product.name}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                    NEW
                  </span>

                </div>


                <div className="p-5">

                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {product.name}
                  </h3>


                  <div className="mt-3 flex items-center justify-between">

                    <p className="text-xl font-bold">
                      {product.price}
                    </p>

                    <p className="text-sm">
                      ⭐ {product.rating}
                    </p>

                  </div>


                  <button className="mt-5 w-full rounded-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="bg-stone-900 py-24 text-white"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
            alt="Furniture interior"
            className="h-[450px] w-full rounded-[30px] object-cover"
          />

          <div>

            <p className="font-semibold uppercase tracking-[3px] text-amber-400">
              About FurniCo.
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Furniture made for the way you live.
            </h2>

            <p className="mt-6 leading-8 text-stone-300">
              We believe furniture should be beautiful, comfortable
              and functional. Our collection combines modern design
              with timeless style.
            </p>

            <button className="mt-8 rounded-full bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-700">
              Discover Our Story →
            </button>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="bg-blue-600 px-6 py-24 text-center text-white"
      >

        <h2 className="text-4xl font-bold md:text-5xl">
          Transform Your Space Today
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-blue-100">
          Find furniture that matches your style and turns your
          house into a beautiful home.
        </p>

        <a
          href="#shop"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-stone-900 hover:bg-stone-100"
        >
          Shop Collection →
        </a>

      </section>


      {/* FOOTER */}
      <footer className="bg-stone-950 px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">

          <h2 className="text-2xl font-bold">
            Furni<span className="text-blue-500">Co.</span>
          </h2>

          <p className="text-sm text-stone-400">
            © 2026 FurniCo. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;