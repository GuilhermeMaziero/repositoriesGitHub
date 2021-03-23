import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  html,body,#root {
    min-height:100%;
    font-size: 93.75%; /* mobile */
  }

  body {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
    -webkit-font-smoothing: antialiased !important;
    font-family:'Roboto','sans-serif';
    color:#FFF;
  }

   button {
    cursor:pointer;
   }

   /*===RESPONSIVE====*/
  @media(min-width:800px){
    html {
        font-size: 87.5%; /* 14px */
    }
  }

`;
