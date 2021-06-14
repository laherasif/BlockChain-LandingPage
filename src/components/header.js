import React,{useEffect} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import  './header.css'
const Header = () => {

  const nav = typeof document !== `undefined` ? document.querySelector("#navbar") : "";
    const NavTop = nav.offsetTop;

    function fixnavbar(){
      if(window.scrollY >= NavTop){
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
      }else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
      }
    }
    useEffect(()=>{
      window.addEventListener("scroll", fixnavbar);

    })
  
  return (
    <div>
      <header>
        <h1><a href="https://quiz.stackfindover.com/">Quizzz</a></h1>
      </header>
      <nav id="navbar" >
        <ul class="menu-list">
          <li class="logo"><a href="https://blogs.stackfindover.com/">Quizzz
 <img src="quiz-logo.png" alt="logo" />
          </a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">FAQ's</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  )
}


export default Header
