"use client";
import Link from "next/link";
import Styles from "./about.module.css";
import Info from "@/components/Info";
import Image from "next/image";
import {useState} from "react";
export const metadata = {
    title: 'halaman about',
    description: 'Generated by create next app',
  };
function About() {

    const showImg=() =>{
        setShow(!show);
    };
    const [show, setShow] = useState (false);
   
    return(
    <>
    <div className={Styles.main}>
     <h1>Halaman About</h1>
     </div>
     <Info title="About Component"/>
    <button className="px-4 py-2 bg-black rounded-md mt-3 text-white" 
    onClick={showImg}>Show images</button>
        {show &&(
        <Image  
        src="/img/girl.jpg" 
        alt="webdevindo" 
        width={500} 
        height={300}
        className="opacity-0 transition-opacity duration-1000" 
        onLoadingComplete={(img) =>
            img.classList.remove("opacity-0")
        }
        />
        )}
    </>
    )
   
 }

export default About;
