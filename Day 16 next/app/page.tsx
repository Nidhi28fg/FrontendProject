"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
   <div>
    <h1 className="text-3xl font-bold text-center text-blue-500 rounded-md">Todo list</h1>
    <Link href="/signin" className="text-blue-500 p-2 rounded-md "> Sinin page</Link>
    <Link href="/signup" className="text-blue-500 p-2 rounded-md">Sign Up page</Link>
    <button onClick={()=> router.push('/signin')} className="bg-blue-500 text-white p-2 rounded-md">Sign In</button>
   </div>
  );
}
