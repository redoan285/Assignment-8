"use client";

import { useState, useMemo } from "react";
// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TileCard from "../../components/TileCard";
import tilesData from "../../../public/data/tiles.json";
import { Search, SlidersHorizontal, LayoutGrid, List, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AllTilesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [viewMode, setViewMode] = useState("grid"); // grid | list

  const categories = ["All", ...new Set(tilesData.map((t) => t.category))];

  // Advanced Filtering + Sorting
  const filteredAndSortedTiles = useMemo(() => {
    let result = tilesData.filter((tile) => {
      const matchesSearch = tile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tile.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || tile.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    // Sorting
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
  }, [searchQuery, activeCategory, sortOption]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setSortOption("default");
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-50">
      {/* <Navbar /> */}

      <main className="flex-grow">
        {/* Hero Section - More Attractive */}
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

            {/* Search Bar */}
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
            
            {/* Filters Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
              {/* Categories */}
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

              {/* Sort & View Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="select select-bordered rounded-full focus:outline-none"
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

            {/* Clear Filters */}
            {(searchQuery || activeCategory !== "All" || sortOption !== "default") && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 mb-6 transition-colors"
              >
                <X size={18} /> Clear All Filters
              </button>
            )}

            {/* Tiles Grid / List */}
            <AnimatePresence mode="wait">
              {filteredAndSortedTiles.length > 0 ? (
                <motion.div 
                  layout
                  className={`grid gap-8 ${viewMode === "grid" 
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                    : "grid-cols-1"}`}
                >
                  {filteredAndSortedTiles.map((tile, index) => (
                    <motion.div
                      key={tile.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <TileCard tile={tile} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-20 text-center"
                >
                  <div className="mx-auto w-28 h-28 bg-base-200 rounded-full flex items-center justify-center mb-8">
                    <Search className="w-14 h-14 text-base-content/20" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">No tiles found</h3>
                  <p className="text-base-content/60 max-w-md mx-auto">
                    We couldn't find any tiles matching your criteria.
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="btn btn-primary mt-8 rounded-full px-8"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}