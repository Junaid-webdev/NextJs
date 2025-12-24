'use client'
import Link from "next/link";
import './login.css';
import { useRouter } from "next/navigation";


const Login = () =>{

    const router = useRouter();

    return<>
    <h2 className="heading">Login Page</h2>
    {/* <Link href="/">Go to home page</Link> */}
    <br />
   {/* <button onClick={()=>router.push('/login/loginstudent')}>Go to Student page</button> */}
    </>

    // Kisi Event kai upar Routing karne ko hum Navigation bolte hai //
    // Kisi link kai upar click krke jate hai usse Linkking bolte hai //
}
export default Login;   