"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TileCard from "@/components/TileCard";
import tilesData from "@/data/tiles.json";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AllTilesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(tilesData.map((t) => t.category))];

  const filteredTiles = tilesData.filter((tile) => {
    const matchesSearch = tile.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || tile.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-base-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Search Section */}
        <section className="bg-primary pt-20 pb-32 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
             <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-primary-content mb-8"
            >
              Explore Our <span className="underline decoration-secondary underline-offset-8">Collection</span>
            </motion.h1>
            
            <div className="max-w-2xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary w-6 h-6 z-20 group-focus-within:scale-110 transition-transform" />
              <input
                type="text"
                placeholder="Search tiles by title..."
                className="input input-lg w-full pl-16 rounded-full shadow-2xl focus:ring-4 focus:ring-white/20 transition-all border-none text-lg h-20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Filters & Grid Section */}
        <section className="container mx-auto px-4 md:px-8 -mt-16 pb-24 relative z-20">
          <div className="bg-base-100 rounded-3xl shadow-2xl p-6 md:p-10 border border-base-200">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`btn btn-sm md:btn-md rounded-full px-6 transition-all ${
                      activeCategory === category
                        ? "btn-primary shadow-lg scale-105"
                        : "btn-ghost hover:bg-base-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-base-content/50">
                <span className="text-sm font-bold uppercase tracking-widest">{filteredTiles.length} Tiles Found</span>
                <div className="divider divider-horizontal mx-0"></div>
                <div className="join">
                   <button className="btn btn-sm join-item btn-active"><LayoutGrid className="w-4 h-4" /></button>
                   <button className="btn btn-sm join-item"><List className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredTiles.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {filteredTiles.map((tile) => (
                    <motion.div
                      key={tile.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TileCard tile={tile} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-base-content/20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No Tiles Found</h3>
                  <p className="text-base-content/50">Try adjusting your search or category filters.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                    className="btn btn-primary btn-sm mt-6 rounded-full"
                  >
                    Clear All Filters
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
