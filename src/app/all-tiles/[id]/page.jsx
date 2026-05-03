import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        "https://assignment-8-two-xi.vercel.app/data/tiles.json",
        { cache: "force-cache" }
    );

    const photos = await res.json();
    const tile = photos.find(p => p.id.toString() === id.toString());

    if (!tile) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Tile Not Found</h2>
                    <Link href="/all-tiles" className="btn btn-primary">
                        ← Back to Collection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100">
            {/* Back Button */}
            <div className="sticky top-0 z-50 bg-base-100 border-b">
                <div className="container mx-auto px-4 py-4">
                    <Link 
                        href="/all-tiles"
                        className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors w-fit"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to All Tiles</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Left - Image Section */}
                    <div className="relative">
                        <div className="sticky top-24">
                            <div className="aspect-square overflow-hidden rounded-3xl bg-base-200 shadow-xl">
                                <Image
                                    src={tile.image || "/placeholder-tile.jpg"}
                                    alt={tile.title}
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>

                            {/* Thumbnail Gallery (Optional) */}
                            <div className="flex gap-4 mt-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex-1 aspect-square rounded-2xl overflow-hidden border-2 border-primary cursor-pointer">
                                        <Image
                                            src={tile.image || "/placeholder-tile.jpg"}
                                            alt={`${tile.title} view ${i}`}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Details Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 text-sm mb-3">
                                <span className="badge badge-primary badge-outline">{tile.category}</span>
                                {tile.stock && <span className="text-green-600 text-sm font-medium">✓ In Stock</span>}
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl font-black leading-tight text-balance">
                                {tile.title}
                            </h1>

                            {tile.price && (
                                <p className="text-4xl font-bold mt-4 text-primary">
                                    ৳{tile.price}
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Description</h3>
                            <p className="text-base-content/70 leading-relaxed">
                                {tile.description || 
                                "Premium quality tile perfect for modern interiors. Durable, elegant, and easy to maintain. Ideal for both residential and commercial spaces."}
                            </p>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            {tile.size && (
                                <div className="bg-base-200 p-4 rounded-2xl">
                                    <p className="text-base-content/60">Size</p>
                                    <p className="font-semibold">{tile.size}</p>
                                </div>
                            )}
                            {tile.material && (
                                <div className="bg-base-200 p-4 rounded-2xl">
                                    <p className="text-base-content/60">Material</p>
                                    <p className="font-semibold">{tile.material}</p>
                                </div>
                            )}
                            {tile.finish && (
                                <div className="bg-base-200 p-4 rounded-2xl">
                                    <p className="text-base-content/60">Finish</p>
                                    <p className="font-semibold">{tile.finish}</p>
                                </div>
                            )}
                            {tile.color && (
                                <div className="bg-base-200 p-4 rounded-2xl">
                                    <p className="text-base-content/60">Color</p>
                                    <p className="font-semibold">{tile.color}</p>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="btn btn-primary btn-lg flex-1 rounded-full text-lg">
                                {/* <ShoppingCart size={24} /> */}
                                Order Now
                            </button>

                            <button className="btn btn-outline btn-lg rounded-full">
                                <Heart size={24} />
                            </button>

                            <button className="btn btn-outline btn-lg rounded-full">
                                <Share2 size={24} />
                            </button>
                        </div>

                        {/* Additional Info */}
                        <div className="pt-8 border-t text-sm text-base-content/60 space-y-2">
                            <p>✅ Free Delivery on orders above ৳10,000</p>
                            <p>✅ 2 Years Warranty</p>
                            <p>✅ Easy Return within 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;