import React from "react";
import Navigation from "../components/navigation";
import "bootstrap/dist/css/bootstrap.css"
import Image from 'next/image'
import Stories from "../components/stories";
export default function homo(){
    return(
        <div>
            <Navigation/>  
            <Stories/> 
            <Image className="mx-3 my-5 rounded border border-danger" src="/images/124.jpg"  width={600} height={555} />
            <Image className="mx-3 my-5 rounded border border-danger" src="/images/123.jpg"  width={600} height={555} />
    
        </div>
        )
}



