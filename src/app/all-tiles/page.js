"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ ADDED
import Footer from "../../components/Footer";
import TileCard from "../../components/TileCard";
import { Search, SlidersHorizontal, LayoutGrid, List, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client"; // ✅ ADDED

export default function AllTilesPage() {
  const router = useRouter(); // ✅ ADDED
  const { data: session, isPending } = authClient.useSession(); // ✅ ADDED

  
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  // ---------------- YOUR ORIGINAL CODE START ----------------

  const [tilesData, setTilesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://assignment-8-two-xi.vercel.app/data/tiles.json",
        { cache: "force-cache" }
      );
      const data = await res.json();
      setTilesData(data);
    };

    fetchData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["All", ...new Set(tilesData.map((t) => t.category))];

  const filteredAndSortedTiles = useMemo(() => {
    let result = tilesData.filter((tile) => {
      const matchesSearch =
        tile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tile.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || tile.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high":
        result.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "name-az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }, [tilesData, searchQuery, activeCategory, sortOption]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setSortOption("default");
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 pt-24 pb-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

          <div className="container mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-content mb-6"
            >
              Our Complete <span className="text-secondary">Collection</span>
            </motion.h1>

            <p className="text-primary-content/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
              Find the perfect tiles for your dream space
            </p>

            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary w-6 h-6" />
              <input
                type="text"
                placeholder="Search by tile name or category..."
                className="input input-lg w-full pl-16 pr-6 rounded-full shadow-2xl focus:ring-4 focus:ring-white/30 border-none text-lg h-20 placeholder:text-base-content/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content"
                >
                  <X size={22} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filters & Results */}
        <section className="container mx-auto px-4 md:px-8 -mt-12 pb-24 relative z-20">
          <div className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10 border border-base-200">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`btn rounded-full px-5 py-2 transition-all duration-200 ${
                      activeCategory === category
                        ? "btn-primary shadow-md"
                        : "btn-ghost hover:bg-base-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="select select-bordered rounded-full"
                >
                  <option value="default">Sort by Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-az">Name: A - Z</option>
                  <option value="name-za">Name: Z - A</option>
                </select>

                <div className="join">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`btn join-item ${viewMode === "grid" ? "btn-active" : ""}`}
                  >
                    <LayoutGrid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`btn join-item ${viewMode === "list" ? "btn-active" : ""}`}
                  >
                    <List size={20} />
                  </button>
                </div>

                <span className="text-sm font-medium text-base-content/70 pl-3 border-l">
                  {filteredAndSortedTiles.length} Tiles
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {filteredAndSortedTiles.length > 0 ? (
                <motion.div
                  layout
                  className={`grid gap-8 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1"
                  }`}
                >
                  {filteredAndSortedTiles.map((tile) => (
                    <motion.div
                      key={tile.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <TileCard tile={tile} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <p>No tiles found</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}