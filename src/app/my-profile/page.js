"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";                    // ← Added
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { authClient } from "@/lib/auth-client";
import { User, Mail, Calendar, Settings, Edit3, Shield, Star, Package } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  // ← এই অংশটুকু ফিক্স করা হয়েছে
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const user = session.user;

  return (
    <div className="min-h-screen flex flex-col bg-base-200/50">
      {/* <Navbar /> */}
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar: User Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-base-100 rounded-[2rem] shadow-xl overflow-hidden border border-base-200">
                <div className="h-32 bg-gradient-to-r from-primary to-secondary relative">
                   <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-2 bg-base-100 rounded-full shadow-lg">
                      <div className="avatar">
                        <div className="w-80 rounded-full border-4 border-white">
                          <img src={user.image || `https://ui-avatars.com/api/?name=${user.name}`} />
                        </div>
                      </div>
                   </div>
                </div>
                
                <div className="pt-16 pb-8 px-6 text-center">
                  <h2 className="text-2xl font-black">{user.name}</h2>
                  <p className="text-sm text-base-content/50 font-bold uppercase tracking-widest mt-1">Premium Member</p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                     <div className="text-center">
                        <p className="font-black text-xl">12</p>
                        <p className="text-[10px] uppercase font-bold text-base-content/40">Projects</p>
                     </div>
                     <div className="divider divider-horizontal mx-0"></div>
                     <div className="text-center">
                        <p className="font-black text-xl">48</p>
                        <p className="text-[10px] uppercase font-bold text-base-content/40">Tiles</p>
                     </div>
                     <div className="divider divider-horizontal mx-0"></div>
                     <div className="text-center">
                        <p className="font-black text-xl">2.4k</p>
                        <p className="text-[10px] uppercase font-bold text-base-content/40">Points</p>
                     </div>
                  </div>

                  <Link 
                    href="/my-profile/update" 
                    className="btn btn-primary btn-block rounded-2xl mt-8 gap-2 shadow-lg shadow-primary/20"
                  >
                    <Edit3 className="w-4 h-4" /> Update Profile
                  </Link>
                </div>
              </div>

              <div className="bg-base-100 rounded-[2rem] shadow-xl p-6 border border-base-200">
                 <h3 className="font-bold text-sm uppercase tracking-widest text-base-content/40 mb-6">Achievements</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-warning/10 text-warning rounded-xl flex items-center justify-center">
                          <Star className="w-5 h-5 fill-current" />
                       </div>
                       <div>
                          <p className="text-sm font-bold">Top Contributor</p>
                          <p className="text-xs text-base-content/50">Awarded for 10+ reviews</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-info/10 text-info rounded-xl flex items-center justify-center">
                          <Shield className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-sm font-bold">Verified Designer</p>
                          <p className="text-xs text-base-content/50">Identity verified via Google</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Right Side: Details & Activity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12 border border-base-200">
                <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                   Account <span className="text-primary">Details</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Full Name</p>
                      <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl font-bold">
                         <User className="w-5 h-5 text-primary" />
                         {user.name}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Email Address</p>
                      <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl font-bold">
                         <Mail className="w-5 h-5 text-primary" />
                         {user.email}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Account Created</p>
                      <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl font-bold">
                         <Calendar className="w-5 h-5 text-primary" />
                         {new Date(user.createdAt).toLocaleDateString()}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">User ID</p>
                      <div className="flex items-center gap-3 p-4 bg-base-200/50 rounded-2xl font-bold text-[10px] uppercase truncate">
                         <Settings className="w-5 h-5 text-primary shrink-0" />
                         {user.id}
                      </div>
                   </div>
                </div>
              </div>

              {/* Recent Activity Mockup */}
              <div className="bg-base-100 rounded-[2rem] shadow-xl p-8 border border-base-200">
                 <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black flex items-center gap-3">
                       Recent <span className="text-secondary">Saved Tiles</span>
                    </h2>
                    <Link href="/all-tiles" className="text-sm font-bold text-primary hover:underline">Explore More</Link>
                 </div>
                 
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                       <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden bg-base-200 cursor-pointer">
                          <img src={`https://images.unsplash.com/photo-${1584622650111 + i}?q=80&w=2070&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <Package className="text-white w-8 h-8" />
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
     
    </div>
  );
}