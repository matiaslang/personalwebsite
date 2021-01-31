import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Main from './Main'
import styled from 'styled-components'
import colors from './styles/colors.js'
import GlobalStyle from './globalStyles'
import NavButton from './components/Navbutton'

const BottomPage = styled.div`
  background: ${colors.background};
  //z-index: -1;
  height: 100%;
  //position: absolute;
`
const Wrapper = styled.div`
  font-size: 12px;
  text-align: center;
  z-index: -1;
  //height: 2200px;
  height: 100% !important;
  width: 100%;
  position: absolute;
  //flex-direction: row;
`

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Navbar />
      <Main />
      <Footer />
    </Wrapper>
  )
}

export default App
