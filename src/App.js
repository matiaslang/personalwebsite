import './App.css'
import Navbar from './components/Navbar'
import Main from './Main'
import styled from 'styled-components'

const Wrapper = styled.a``

const Timer = () => {
  let year = new Date().getFullYear()

  return (
    <div>
      <p>ps. these pages should be finished by the end of the year {year}</p>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
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
