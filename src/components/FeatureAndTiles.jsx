import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TileCard from "./TileCard";

const FeatureAndTiles = async () => {
  const res = await fetch(
    "https://assignment-8-two-xi.vercel.app/data/tiles.json",
    { cache: "force-cache" } // Optional: better performance
  );

  const photos = await res.json()
  const toPhotos = photos.slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-base-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 md:mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-balance">
              Featured <span className="text-primary">Tiles</span>
            </h2>
            <p className="mt-4 text-base-content/70 text-lg md:text-xl max-w-lg">
              Discover our most loved and trending tile collections
            </p>
          </div>

          {/* Desktop "See All" Button */}
          <Link
            href="/all-tiles"
            className="hidden md:flex items-center gap-2 btn btn-outline btn-lg rounded-full px-8 group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            See All Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {toPhotos.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* Mobile "View More" Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/all-tiles"
            className="btn btn-primary btn-wide rounded-full text-lg h-14"
          >
            View All Collections
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureAndTiles;