"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function TileCard({ tile }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card bg-base-100 shadow-xl border border-base-200 group overflow-hidden"
    >
      <figure className="relative h-64 overflow-hidden">
        <img
          src={tile.image}
          alt={tile.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 badge badge-primary font-bold uppercase tracking-tighter p-3 shadow-md">
          {tile.category}
        </div>
        {!tile.inStock && (
          <div className="absolute inset-0 bg-base-300/60 flex items-center justify-center backdrop-blur-[2px]">
            <span className="badge badge-error badge-lg font-bold text-white shadow-xl">Out of Stock</span>
          </div>
        )}
      </figure>

      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <h2 className="card-title font-bold text-xl group-hover:text-primary transition-colors">
            {tile.title}
          </h2>
        </div>

        <p className="text-base-content/70 line-clamp-2 text-sm mb-4">
          {tile.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-black text-primary">
              ${tile.price}
            </span>
            <span className="text-xs text-base-content/50 ml-1">/{tile.dimensions}</span>
          </div>

          <Link
            href={`/tile/${tile.id}`}
            className="btn btn-primary btn-sm px-4 shadow-lg group/btn"
          >
            Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
