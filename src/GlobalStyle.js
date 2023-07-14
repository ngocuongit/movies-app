import {createGlobalStyle} from 'styled-components'

  const GlobalStyle = createGlobalStyle`
    :root{
    
      
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
  }
  body{
    font-family: 'Helvetica Neue', Helvetica, Arial,  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px;

  }
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }

`

export default GlobalStyle