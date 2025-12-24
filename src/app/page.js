'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  // useRouter ka variable bana rhe hai or button mai use krhe hai 
  const router = useRouter();
  
  // useRouter ka function banakar use krna //

  const Navigate = (name)=>{
    router.push(name)
  }
  return (
    <>
  <h2>Basic Routing | Make New Page</h2>

    {/* Link ko use kr rhe hai  */}
  
      <Link href="/login">Go to login page</Link>
      <br />
      <Link href="/about">Go to About page</Link>
      <br /><br />

      {/* useRouter ko use kr rhe hai  */}
      <button onClick={()=>router.push('/login')}>Go to login page</button>
      <br /><br />
      <button onClick={()=>Navigate('/about')}>Go to about page</button>
    
    </>
  );
}

