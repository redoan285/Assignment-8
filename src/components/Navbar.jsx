import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            T
          </div>

          <span className="text-xl font-bold tracking-tighter hidden sm:inline-block">
            Tiles<span className="text-primary">Gallery</span>
          </span>
        </Link>
      </div>

      <div className="flex justify-between gap-3 ">
        <p>Home</p>
        <p>All Tiles</p>
        <p>My Profile</p>
      </div>
      <div className="flex gap-2">
            <Link href="/register" className="btn btn-ghost btn-sm hidden sm:flex">Sign Up</Link>
            <Link href="/login" className="btn btn-primary btn-sm px-6">Login</Link>
          </div>
    </div>
  );
};

export default Navbar;