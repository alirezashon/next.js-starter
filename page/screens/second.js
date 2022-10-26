import React from "react";
import Navigation from "../components/navigation";
import "bootstrap/dist/css/bootstrap.css"
import Image from 'next/image'
import Stories from "../components/stories";
export default function homee(){
    return(
        <div>
            <Navigation/>  
            <Stories/> 
            <Image className="mx-3 my-5 rounded border border-danger" src="/images/gold.jpg"  width={600} height={555} />
            <Image className="mx-3 my-5 rounded border border-danger" src="/images/127.jpg"  width={600} height={555} />
    
        </div>
        )
}



