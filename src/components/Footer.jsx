import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold text-xl shadow-lg">
                T
              </div>
              <span className="text-xl font-bold tracking-tighter">
                Tiles<span className="text-primary">Gallery</span>
              </span>
            </Link>
            <p className="text-base-content/70 leading-relaxed max-w-xs">
              Premium tiles for every space. Discover high-quality materials and unique designs to transform your home.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </button>
              <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="link link-hover text-base-content/70 hover:text-primary">Home</Link></li>
              <li><Link href="/all-tiles" className="link link-hover text-base-content/70 hover:text-primary">All Tiles</Link></li>
              <li><Link href="/my-profile" className="link link-hover text-base-content/70 hover:text-primary">My Profile</Link></li>
              <li><Link href="/login" className="link link-hover text-base-content/70 hover:text-primary">Login</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base-content/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>redoanmollik582@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-base-content/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1756301760</span>
              </li>
              <li className="flex items-start gap-3 text-base-content/70">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kaliakoir, Gazipur District, Dhaka</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-base-content/70 mb-4">Subscribe for the latest updates and design tips.</p>
            <div className="join w-full">
              <input className="input input-bordered join-item w-full" placeholder="Email" />
              <button className="btn btn-primary join-item">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
          <p>© 2026 Tiles Gallery. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}















// public\data\tiles.json






// import { Mail, Phone, MapPin } from "lucide-react";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-base-200 pt-16 pb-8">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <Link href="/" className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-content font-bold text-xl shadow-lg">
//                 T
//               </div>
//               <span className="text-xl font-bold tracking-tighter">
//                 Tiles<span className="text-primary">Gallery</span>
//               </span>
//             </Link>
//             <p className="text-base-content/70 leading-relaxed max-w-xs">
//               Premium tiles for every space. Discover high-quality materials and unique designs to transform your home.
//             </p>
//             <div className="flex gap-4">
//               <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
//               </button>
//               <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
//               </button>
//               <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
//               </button>
//               <button className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-white transition-all">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
//               </button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Quick Links</h3>
//             <ul className="space-y-4">
//               <li><Link href="/" className="link link-hover text-base-content/70 hover:text-primary">Home</Link></li>
//               <li><Link href="/all-tiles" className="link link-hover text-base-content/70 hover:text-primary">All Tiles</Link></li>
//               <li><Link href="/my-profile" className="link link-hover text-base-content/70 hover:text-primary">My Profile</Link></li>
//               <li><Link href="/login" className="link link-hover text-base-content/70 hover:text-primary">Login</Link></li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3 text-base-content/70">
//                 <Mail className="w-5 h-5 text-primary shrink-0" />
//                 <span>support@tilesgallery.com</span>
//               </li>
//               <li className="flex items-start gap-3 text-base-content/70">
//                 <Phone className="w-5 h-5 text-primary shrink-0" />
//                 <span>+880 1516-504272</span>
//               </li>
//               <li className="flex items-start gap-3 text-base-content/70">
//                 <MapPin className="w-5 h-5 text-primary shrink-0" />
//                 <span>123 Design Avenue, Creative District, Dhaka</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-bold mb-6">Newsletter</h3>
//             <p className="text-base-content/70 mb-4">Subscribe for the latest updates and design tips.</p>
//             <div className="join w-full">
//               <input className="input input-bordered join-item w-full" placeholder="Email" />
//               <button className="btn btn-primary join-item">Join</button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
//           <p>© 2026 Tiles Gallery. All rights reserved.</p>
//           <div className="flex gap-8">
//             <button className="hover:text-primary transition-colors">Privacy Policy</button>
//             <button className="hover:text-primary transition-colors">Terms of Service</button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }