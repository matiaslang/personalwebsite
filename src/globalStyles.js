import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Aguafina+Script&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Aguafina Script', cursive;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
`

export default GlobalStyle
