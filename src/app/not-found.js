import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* <Navbar /> */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          <div className="relative mb-8">
            <h1 className="text-[12rem] font-black text-primary opacity-10 leading-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <Search className="w-20 h-20 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl font-black mb-4">Lost in the Gallery?</h2>
          <p className="text-xl text-base-content/60 mb-10 leading-relaxed">
            Oops! The tile design you're looking for seems to have been misplaced or moved to another section.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary btn-lg rounded-2xl px-10 gap-3 shadow-xl shadow-primary/20">
              <Home className="w-5 h-5" /> Back to Home
            </Link>
            <Link href="/all-tiles" className="btn btn-outline btn-lg rounded-2xl px-10">
              Explore Gallery
            </Link>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
