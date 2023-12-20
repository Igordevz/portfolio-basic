import styled from "styled-components";

export const ContainerHeaderUni = styled.div`
  height: 90px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  #menu {
    cursor: pointer;
    display: flex;
  }

  .title h1 {
    font-weight: 400;
    font-size: 37px;
    color: #0016EC;
  }

  .mid-social {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: row;
  }

  .mid-social a {
    text-decoration: none;
    cursor: pointer;
    background: #16171f;
    color: white;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    gap: 10px;
    padding: 13px 25px;
    transition: 0.5s;

    &:hover {
      background: #0016EC;
      .point {
        display: flex;
      }
    }
  }

  .mid-social a .point {
    height: 10px;
    width: 10px;
    display: none;
    border-radius: 100%;
    background: white;
    animation: chock 1s;
  }

  @keyframes chock {
    0% {
      transform: translateX(20px);
    }
    20% {
      transform: translateX(-30px);
    }
    40% {
      transform: translateX(40px);
    }
    60% {
      transform: translateX(-30px);
    }
    80% {
      transform: translateX(0px);
    }
  }

  .content-menu {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 40%;
    display: flex;
    gap: 10px;
    z-index: 2;
    padding: 10px;
    animation: animator 1s;
  }

  .content-menu .content-menu-top {
    padding: 20px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    flex-direction: column;
    background: black;
    opacity: 0.25;
    transform: translateY(100px) rotateZ(-60deg);
  }

  .content-menu .content-menu-top .item {
    height: 50px;
    overflow: hidden;

    & h2,
    h3 {
      font-size: 30px;
      font-weight: 400;
    }
  }

  .content-menu .content-menu-bottom {
    padding: 20px;
    position: relative;
    display: flex;
    opacity: 0.25;
    transform: translateY(100px) rotateZ(60deg);
    gap: 10px;
    flex-direction: column;
    color: white;
    border-radius: 10px;
    background: #0016EC;
    :hover{
     transition: .1s;
      scale: 1.08;
    }
  }

  .content-menu .content-menu-bottom h2 {
    font-size: 40px;
    padding: 10px;
    font-weight: 400;
  }

  .content-menu .content-menu-bottom input {
    outline: none;
    padding-left: 10px;
    color: white;
    background-color: #191919;
    border: none;
    padding: 15px;
    border-radius: 50px;
    position: relative;
  }

  .content-menu .content-menu-bottom button {
    position: absolute;
    bottom: 25px;
    right: 40px;
    background: none;
    border: none;
    outline: none;
  }

  @keyframes animator {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .content-menu #menu-close {
    position: absolute;
    cursor: pointer;
    z-index: 1;
    right: 30px;
    top: 30px;
  }

  #link {
    right: 10px;
    position: absolute;
    bottom: 0;
    transform: rotateZ(25deg);
  }

  .content-menu a {
    color: white;
    text-decoration: none;
    font-size: 30px;
  }

  @media (max-width: 829px) {
    justify-content: space-around;
    nav {
      display: none;
    }
    #menu {
      display: flex;
    }
    .content-menu {
      width: 98%;
    }
  }

  @media (max-width: 560px) {
    .content-menu {
      width: 98%;
    }
  }

  @media (max-width: 363px) {
    .content-menu .content-menu-top a {
      font-size: 24px;
    }
    .content-menu .content-menu-bottom h2 {
      font-size: 24px;
    }
  }
`;
