import  { useEffect, useState } from "react";
import { ContainerHeaderUni } from "./style";
import menu from "../../../assets/menu-aberto.png";
import close from "../../../assets/marca-cruzada.png";
import gsap from "gsap"
import seta from "../../../assets/seta-direita.png"
export default function HeaderUniversal() {
  const [menux, setMenux] = useState(false);

  useEffect(() => {
    gsap.to(".content-menu-bottom, .content-menu-top", {
      y:0,
      opacity: 1,
      transform: "rotateZ(0deg )",
      x: 0,
    })

    const animas = document.getElementById("animas")
    animas?.addEventListener("mouseover", () =>{
      gsap.to(".sub", {
        y: -40,
        
      animation: .1

      })
    })
    animas?.addEventListener("mouseout", () =>{
      gsap.to(".sub", {
        y: 0,
        color: "white",
      animation: .1
      })
    })
    const animas1 = document.getElementById("animas1")
    animas1?.addEventListener("mouseover", () =>{
      gsap.to(".sub1", {
        y: -40,
        
      animation: .1

      })
    })
    animas1?.addEventListener("mouseout", () =>{
      gsap.to(".sub1", {
        y: 0,
        color: "white",
      animation: .1
      })
    })
    const animas2 = document.getElementById("animas2")
    animas2?.addEventListener("mouseover", () =>{
      gsap.to(".sub2", {
        y: -40,
        
      animation: .1

      })
    })
    animas2?.addEventListener("mouseout", () =>{
      gsap.to(".sub2", {
        y: 0,
        color: "white",
      animation: .1
      })
    })
    const animas3 = document.getElementById("animas3")
    animas3?.addEventListener("mouseover", () =>{
      gsap.to(".sub3", {
        y: -40,
        
      animation: .1

      })
    })
    animas3?.addEventListener("mouseout", () =>{
      gsap.to(".sub3", {
        y: 0,
        color: "white",
      animation: .1
      })
    })
  },)
  
  
  return (
   
    <>
    <ContainerHeaderUni>
      <div className="title">
        <h1>Igor</h1>
      </div>
    
      {menux ? (
        <div className="content-menu">
        
          <div id="menu-close" onClick={() => setMenux(!menux)}>
            <img src={close} alt="" />
          </div>
          <div className="content-menu-top">
            <div className="item" >
            <a href="/"  id="animas">
              <h2  className="sub">Home</h2>
              <h3 className="sub">Home</h3>
            </a>
            </div>
            <div className="item" >
            <a href="/"  id="animas1">
              <h2  className="sub1">About</h2>
              <h3 className="sub1">About</h3>
            </a>
            </div>
            <div className="item" >
            <a href="/"  id="animas2">
              <h2  className="sub2">Typography</h2>
              <h3 className="sub2">Typography</h3>
            </a>
            </div>
            <div className="item" >
            <a href="/"  id="animas3">
              <h2  className="sub3">Contato</h2>
              <h3 className="sub3">Contato</h3>
            </a>
            </div>
          </div>
          <div className="content-menu-bottom">
              <h2>
               Inscreva-se para agendamentos
              </h2>
              <input type="email" required placeholder="Insira seu email" />
              <button>
                <img src={seta} alt="" />
              </button>
          </div>
          <a href="https://github.com/igordevz" target="_blank">

          <div className="content-menu-bottom"  >
              <h2>
              Conheça-me no Github
              </h2>
              <button id="link">
                <img src={seta} alt="" />
              </button>
          </div>
          </a>
        </div>
      ) : (
        <></>
        )}

      <div className="mid-social">
        <a target="_blank" href="https://www.linkedin.com/in/igor-silva-386b09255/">
          <div className="point"></div>Linkedin
        </a>
        <div id="menu" onClick={() => setMenux(!menux)}>
          {!menux ? <img src={menu} /> : <></>}
        </div>
      </div>
    </ContainerHeaderUni>
        </>
  );
}
