import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap');   
    * {
        margin: 0;
        padding: 0;
        font-family: Bodoni Moda, serif, Avenir, Arial, Helvetica, sans-serif;
        font-weight: normal;
        //box-sizing: border-box;
        //text-decoration: none;
        list-style: none;
    }
`

export default GlobalStyle
