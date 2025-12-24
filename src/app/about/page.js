'use client'
import Link from 'next/link';
import React, { useState } from 'react'



const About = () => {

    const [name, setname] = useState("Junaid");

    const User = ()=>{
   setname("Alexa");
}
    return (
        <>
        <div>About page {name}</div>
        <button onClick={User}>Click</button>
        <Link href="/">Go to home page</Link>
        <br />
         <Link href="/about/aboutcollege">Go to About College</Link>
         <br /><br />
         <Link href="/about/aboutstudent">Go to About Student </Link>
    
     </>
    )
}
export default About;
