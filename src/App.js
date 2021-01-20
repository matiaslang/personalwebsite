import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './Main'
import styled from 'styled-components'
import colors from './styles/Colors'

const Wrapper = styled.div`
  background: ${colors.background};
  height: 100%;
`

const App = () => {
  return (
    <div className='App'>
      <Wrapper color={colors}>
        <Navbar />
        <Main />
        <Footer />
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
