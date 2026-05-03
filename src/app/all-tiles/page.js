import Link from "next/link";
import TileCard from "../../components/TileCard";
import { Search } from "lucide-react";

export default async function AllTilesPage() {
  const res = await fetch(
    "https://assignment-8-two-xi.vercel.app/data/tiles.json",
    {
      cache: "force-cache", // optional (performance boost)
    }
  );

  const tilesData = await res.json();

  const categories = ["All", ...new Set(tilesData.map((t) => t.category))];

  return (
    <div className="min-h-screen bg-base-100 px-4 md:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          All <span className="text-primary">Tiles</span>
        </h1>

        <p className="text-base-content/60 max-w-xl mx-auto">
          Explore all available premium tile collections.
        </p>

        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50" />
          <input
            type="text"
            placeholder="Search tiles..."
            className="input input-bordered w-full pl-12 rounded-full"
            disabled
          />
        </div>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-sm btn-outline rounded-full"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tilesData.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
}