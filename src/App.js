import './App.css'
import Navbar from './components/Navbar'
import Main from './Main'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import colors from './styles/Colors'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');
  body {
    font-family: 'East Sea Dokdo', sans-serif;
  }
`

const Wrapper = styled.div`
  background-color: ${colors.background};
  height: 1500px;
`

function App() {
  return (
    <div className='App'>
      <Wrapper color={colors}>
        <GlobalStyles />
        <Navbar />
        <Main />
      </Wrapper>
    </div>
  )
}

/* function App() {
  return (
    <div className='App'>
      <Wrapper>
        <head>
          <TopBar />
        </head>
        <body>
          <TopBar />
        </body>
        <footer>
          <TopBar />
        </footer>
        <header className='App-header'>
          <p>Hello to my personal website!</p>
          <p>
            I will be adding more information about me to this page in the near
            future.
          </p>
          <Timer />
          <p>-Matias Lang</p>
        </header>
      </Wrapper>
    </div>
  )
} */

export default App
