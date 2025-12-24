'use client'
import { useParams } from "next/navigation";

const Lectures = () =>{

    const params = useParams();
    console.log(params);
    
    return<>
    <div>
        <h1> Day of College {params.lecture[0]}</h1>
        <h2>Leacture No. {params.lecture[1]}</h2>
    </div>
    
    </>
}
export default Lectures;