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
    
     </>
    )
}
export default About;
