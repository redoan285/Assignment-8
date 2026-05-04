"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Mail, Lock, User, Image as ImageIcon, UserPlus, ArrowRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    await authClient.signUp.email({
        email,
        password,
        name,
        image,
        fetchOptions: {
            onSuccess: () => {
                toast.success("Registration successful! Redirecting to login...");
                setTimeout(() => router.push("/login"), 2000);
            },
            onError: (ctx) => {
                toast.error(ctx.error.message || "Registration failed");
                setLoading(false);
            }
        }
    });
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ToastContainer position="top-right" theme="colored" />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-base-100 p-10 rounded-[2.5rem] shadow-2xl border border-base-200 relative z-10"
      >
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-content font-bold text-2xl shadow-lg group-hover:rotate-12 transition-transform">
              T
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Tiles<span className="text-primary">Gallery</span>
            </span>
          </Link>
          <h2 className="text-3xl font-black text-base-content">Create Account</h2>
          <p className="mt-2 text-sm text-base-content/60 font-medium">
            Join our community of tile enthusiasts
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <div className="space-y-3">
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold uppercase tracking-widest text-[9px] text-base-content/50">Full Name</span>
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  required
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-12 font-medium"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold uppercase tracking-widest text-[9px] text-base-content/50">Email Address</span>
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  required
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-12 font-medium"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold uppercase tracking-widest text-[9px] text-base-content/50">Photo URL (Optional)</span>
              </label>
              <div className="relative group">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                <input
                  type="url"
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-12 font-medium"
                  placeholder="https://example.com/photo.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold uppercase tracking-widest text-[9px] text-base-content/50">Password</span>
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-base-content/30 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  required
                  className="input input-bordered w-full pl-12 rounded-2xl bg-base-200/50 border-none focus:ring-2 focus:ring-primary h-12 font-medium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 mt-4"
          >
            {loading ? <span className="loading loading-spinner"></span> : (
              <span className="flex items-center gap-2">
                Register <UserPlus className="w-5 h-5" />
              </span>
            )}
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-base-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-base-100 px-4 text-base-content/40 font-bold tracking-widest">Or Register with</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full h-14 rounded-2xl font-bold border-base-300 hover:bg-base-200 hover:text-base-content gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            continue with Google
          </button>
        </form>

        <p className="text-center text-sm font-medium text-base-content/60">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-black hover:underline underline-offset-4">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}


















// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   Description,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { error } from "better-auth/api";

// export default function SignUpPage() {
//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const image = e.target.image.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // console.log({ name, image, email, password });

//     const {data, error} = await authClient.signUp.email({
//       name,
//       email,
//       password,
//       image,
//     })

//     console.log(data, error);
//   };

//   return (
//     <Card className="border mx-auto w-[500px] py-10 mt-5">
//       <h1 className="text-center text-2xl font-bold mb-8">Sign Up</h1>

//       <Form
//         className="flex w-96 mx-auto flex-col gap-4"
//         onSubmit={onSubmit}
//       >
//         <TextField isRequired name="name" type="text">
//           <Label>Name</Label>
//           <Input placeholder="Enter your name" />
//           <FieldError />
//         </TextField>

//         <TextField isRequired name="image" type="text">
//           <Label>Image URL</Label>
//           <Input placeholder="https://example.com/image.jpg" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }
//             return null;
//           }}
//         >
//           <Label>Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) return "Password must be at least 8 characters";
//             if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
//             if (!/[0-9]/.test(value)) return "Password must contain at least one number";
//             return null;
//           }}
//         >
//           <Label>Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description>
//             Must be at least 8 characters with 1 uppercase and 1 number
//           </Description>
//           <FieldError />
//         </TextField>

//         <div className="flex gap-3 mt-4">
//           <Button type="submit" className="flex-1">
//             <Check />
//             Sign Up
//           </Button>
//           <Button type="reset" variant="secondary" className="flex-1">
//             Reset
//           </Button>
//         </div>
//       </Form>
//     </Card>
//   );
// }
















// // "use client";
// // import { authClient } from "@/lib/auth-client";
// // import { Check } from "@gravity-ui/icons";
// // import {
// //   Button,
// //   Card,
// //   Description,
// //   FieldError,
// //   Form,
// //   Input,
// //   Label,
// //   TextField,
// // } from "@heroui/react";
// // import { error } from "better-auth/api";
// // import { data } from "framer-motion/client";

// // export default function SignUpPage() {
// //   const onSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData(e.currentTarget);

// //     const name = formData.get("name");
// //     const image = formData.get("image");
// //     const email = formData.get("email");
// //     const password = formData.get("password");

// //     // console.log({ name, image, email, password });

// //     const (data, error) = await authClient.signUp.email({
// //       name,
// //       email,
// //       password,
// //       image,
// //     })

// //     console.log(data, error);
// //   };

// //   return (
// //     <Card className="border mx-auto w-[500px] py-10 mt-5">
// //       <h1 className="text-center text-2xl font-bold mb-8">Sign Up</h1>

// //       <Form
// //         className="flex w-96 mx-auto flex-col gap-4"
// //         onSubmit={onSubmit}
// //       >
// //         <TextField isRequired name="name" type="text">
// //           <Label>Name</Label>
// //           <Input placeholder="Enter your name" />
// //           <FieldError />
// //         </TextField>

// //         <TextField isRequired name="image" type="text">
// //           <Label>Image URL</Label>
// //           <Input placeholder="https://example.com/image.jpg" />
// //           <FieldError />
// //         </TextField>

// //         <TextField
// //           isRequired
// //           name="email"
// //           type="email"
// //           validate={(value) => {
// //             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
// //               return "Please enter a valid email address";
// //             }
// //             return null;
// //           }}
// //         >
// //           <Label>Email</Label>
// //           <Input placeholder="john@example.com" />
// //           <FieldError />
// //         </TextField>

// //         <TextField
// //           isRequired
// //           minLength={8}
// //           name="password"
// //           type="password"
// //           validate={(value) => {
// //             if (value.length < 8) return "Password must be at least 8 characters";
// //             if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
// //             if (!/[0-9]/.test(value)) return "Password must contain at least one number";
// //             return null;
// //           }}
// //         >
// //           <Label>Password</Label>
// //           <Input placeholder="Enter your password" />
// //           <Description>
// //             Must be at least 8 characters with 1 uppercase and 1 number
// //           </Description>
// //           <FieldError />
// //         </TextField>

// //         <div className="flex gap-3 mt-4">
// //           <Button type="submit" className="flex-1">
// //             <Check />
// //             Sign Up
// //           </Button>
// //           <Button type="reset" variant="secondary" className="flex-1">
// //             Reset
// //           </Button>
// //         </div>
// //       </Form>
// //     </Card>
// //   );
// // }