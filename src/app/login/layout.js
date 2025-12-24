'use client'
import Link from "next/link";
import './login.css';
import { usePathname } from "next/navigation";
const Layout = ({children}) =>{

    const pathName = usePathname();
    console.log(pathName);
    

    return<>
    <div>
    <ul className="login-menu">
        <li>Login Navbar</li>
        <li>
            <Link href="/login">Login Main</Link>
          
             </li>
        <li>
              <Link href="/login/loginstudent">Student Login</Link>
          
             </li>
    </ul>

    </div>
    {children}
    </>
}
export default Layout;