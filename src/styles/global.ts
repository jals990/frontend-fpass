import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "react-toastify/dist/ReactToastify.css";
import  background from '../media/bkg.jpg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #e7202d;
    --white: #f0f2f5;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --dark: #090c15;
    --button: #ff9e43;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Gotham,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    
    @media (max-width: 1088px){
      font-size: 93.75%;
    }
    @media (max-width: 788px){
      font-size: 87.5%;
    }
  }

  body {
    background: url(${background}) no-repeat center center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
  }

  footer{
    position: fixed;
    text-align: center;
    color: var(--white);
    padding: 7px;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--background);
    display: block;
  }

  button{
    cursor: pointer;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    white-space: nowrap;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    border-left: 2px solid #000;
    padding: 6px 15px;
    background-color: var(--button);
    position: relative;
    color: #000;
    border-radius: 0;
    font-weight: 800;
    margin: 0;
    width: auto;
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
    letter-spacing: .5px;
    -webkit-transition: background .4s,border .4s,color .4s;
    transition: background .4s,border .4s,color .4s;
    white-space: break-spaces;
  }
  
  h1{
    font-family: Bungee;
    color: var(--white);
    text-shadow: 0 0 0.2em #000;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;