"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "../../src/lib/auth-client";
import { LogOut, User, LayoutGrid, Home, UserCircle } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "All Tiles", href: "/all-tiles", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "My Profile", href: "/my-profile", icon: <UserCircle className="w-4 h-4" /> },
  ];

  const handleLogout = async () => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                // window.location.href = "src\app\login\page.js";
                router.push("/login");
            }
        }
    });
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
            T
          </div>
          <span className="text-xl font-bold tracking-tighter hidden sm:inline-block">
            Tiles<span className="text-primary">Gallery</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-all ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-base-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary/20">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`}
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-xl w-52 border border-base-200">
              <li className="menu-title px-4 py-2 border-b border-base-200 mb-2">
                <p className="text-xs font-bold text-base-content/50 uppercase">Account</p>
                <p className="text-sm font-semibold truncate">{session.user.name}</p>
              </li>
              <li>
                <Link href="/my-profile" className="py-2">
                  <User className="w-4 h-4" /> Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-error py-2">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/register" className="btn btn-ghost btn-sm hidden sm:flex">Sign Up</Link>
            <Link href="/login" className="btn btn-primary btn-sm px-6">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}
