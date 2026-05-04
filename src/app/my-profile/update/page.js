"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { authClient } from "@/lib/auth-client";
import { User, ImageIcon, Save, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
        const { error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (error) {
            toast.error(error.message || "Failed to update profile");
        } else {
            toast.success("Profile updated successfully!");
            setTimeout(() => router.push("/my-profile"), 1500);
        }
    } catch (err) {
        toast.error("Something went wrong");
    } finally {
        setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200/50">
      {/* <Navbar /> */}
      <ToastContainer position="top-right" theme="colored" />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <Link 
            href="/my-profile" 
            className="inline-flex items-center gap-2 text-base-content/50 hover:text-primary transition-colors mb-8 font-bold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Profile
          </Link>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-base-100 rounded-[2.5rem] shadow-2xl overflow-hidden border border-base-200"
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="relative inline-block mb-6">
                   <div className="avatar">
                      <div className="w-32 rounded-3xl shadow-2xl border-4 border-white">
                         <img src={image || `https://ui-avatars.com/api/?name=${name}`} />
                      </div>
                   </div>
                   <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <ImageIcon className="w-6 h-6" />
                   </div>
                </div>
                <h2 className="text-3xl font-black">Update <span className="text-primary">Information</span></h2>
                <p className="text-base-content/50 font-medium mt-2">Personalize your profile details</p>
              </div>

              <form onSubmit={handleUpdate} className="space-y-8">
                <div className="space-y-6">
                   <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold uppercase tracking-widest text-[10px] text-base-content/50">Your Display Name</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          required
                          className="input input-bordered w-full pl-14 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-16 font-bold text-lg"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                   </div>

                   <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold uppercase tracking-widest text-[10px] text-base-content/50">Avatar Image URL</span>
                      </label>
                      <div className="relative group">
                        <ImageIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                        <input
                          type="url"
                          className="input input-bordered w-full pl-14 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-16 font-bold text-lg"
                          placeholder="https://example.com/avatar.jpg"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                        />
                      </div>
                      <label className="label">
                         <span className="label-text-alt text-base-content/40 italic">Link to a high-quality JPG or PNG image.</span>
                      </label>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                   <button
                    type="submit"
                    disabled={updating}
                    className="btn btn-primary flex-1 h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 gap-3"
                   >
                     {updating ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />}
                     Update Information
                   </button>
                </div>
              </form>
            </div>
            
            <div className="bg-base-200/50 p-6 text-center">
               <p className="text-xs font-bold text-base-content/30 uppercase tracking-widest">
                  Secure Data Storage • 256-bit Encryption
               </p>
            </div>
          </motion.div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
