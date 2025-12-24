import Link from "next/link";

 function Studentlist(){

    return<>
    <div>
    <h1>Student List</h1>
    <ul>
        <li>
            <Link href="/studentlist/anil">Anil</Link>
        </li>
        <li>
            <Link href="/studentlist/sam">Sam</Link>
        </li>
        <li>
            <Link href="/studentlist/peeter">Peter</Link>
        </li>
        <li>
            <Link href="/studentlist/bruce">Bruce</Link>
        </li>
    </ul>
    </div>
    
    </>
}
export default Studentlist;