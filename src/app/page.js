'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  // Usestate Pure Component ko Rearender Karta hai jeha jeha State use ki hui
  //hogi wha wha ye setname update ho jayega Rearender Hoga //

  // Variable update nhi hota hai state hi update hoti hai //

  const [name, setName] = useState(' Anil') // Defalut Value Add //
  const apple = () => {
    setName(" Sidhu"); // Update This value //
  }

  // Component kai ander component bana skte hai //

  const InnerComponent = () => {
    return <>
      <h2>Inner Component</h2>
    </>
  }

  return (
    <>

      <h2>Events function and state{name}</h2>
      <button onClick={() => apple()}>Click Me</button>
      <InnerComponent />  // isko hum hook banakr use krte hai //
      {InnerComponent()} // isko hum bina hook use kiya us kr skte hai //
    </>
  );
}

