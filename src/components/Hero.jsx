"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-base-100 py-20 px-4 md:px-8">
      
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Premium Tile Selection 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Perfect Aesthetic
            </span>
          </h1>

          <p className="text-xl text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Transform your ideas into high-quality tile designs with our curated collection of ceramic, porcelain, and natural stone tiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/all-tiles"
              className="btn btn-primary btn-lg px-8 group shadow-xl"
            >
              Browse Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="btn btn-outline btn-lg px-8">
              View Pricing
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-base-300">
            <Image
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Tiles Banner"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 bg-base-100 p-5 rounded-2xl shadow-xl hidden md:block border border-base-200"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <Image
                  src="https://i.pravatar.cc/100?u=1"
                  alt="user1"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/100?u=2"
                  alt="user2"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Image
                  src="https://i.pravatar.cc/100?u=3"
                  alt="user3"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>

              <div className="text-xs">
                <p className="font-bold">2.5k+</p>
                <p className="text-base-content/50">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-base-100 p-5 rounded-2xl shadow-xl hidden md:block border border-base-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
                <Sparkles className="w-5 h-5" />
              </div>

              <div className="text-xs">
                <p className="font-bold">New Arrival</p>
                <p className="text-base-content/50">Marble Elegance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}