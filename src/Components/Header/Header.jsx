import React from 'react'
import Logo from "../../Assets/random-ppl-logo.png"
import "./Header.scss"
import { useEffect, useRef} from 'react'

export default function Header() {

  const headerRef = useRef()

  const scrollEvent = () =>{
    let scroll = window.scrollY;

    headerRef.current.style.height = scroll > 50 ? "100px" : "150px";
    headerRef.current.style.width = scroll > 50 ? "30vw" : "100%";
  }


  useEffect(()=>{
    let Header = headerRef.current;
    
    document.addEventListener("scroll",scrollEvent)

    // ()=>{
    //   document.removeEventListener("scroll",scrollEvent)
    // }

  },[])

  return (

    <>
    <div className='Header' ref={headerRef}>
      <img src={Logo} alt="logo"/>
    </div>
    </>
  )
}
