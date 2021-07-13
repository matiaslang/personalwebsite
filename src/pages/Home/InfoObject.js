import styled, { keyframes } from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import personalPhoto from '../../assets/personalPhoto.png'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import { makeStyles } from '@material-ui/core/styles'

const Wrapper = styled.div`
  background-color: papayawhip;
  margin: 3rem 1rem 6rem 1rem;
  height: 100vh;
  padding: 1rem;
`

const InnerWrapper = styled.div`
  border: 5px solid red;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconLinksWrapper = styled.div`
  padding-top: 1rem;
`

const pictureAnimation = keyframes`
 0% {clip-path: polygon(86.98% 0.26%, 100.15% -0.12%, 100.00% 11.72%)};
 10% {clip-path: polygon(70.31% 0.26%, 86.72% -0.05%, 100.41% 12.9%, 100.26% 29.69%)};
 20% {clip-path: polygon(70.31% 0.26%, 47.14% -0.05%, 100.15% 51.44%, 100.26% 29.69%)};
 30% {clip-path: polygon(17.45% -0.00%, 47.14% -0.05%, 100.15% 51.44%, 100% 80.99%)};
 40% {clip-path: polygon(17.45% 0%, -1.04% -0.05%, 99.63% 100.66%, 100% 80.99%)};
 50% {clip-path: polygon(0% 21.35%, 0% -0.05%, 99.63% 100.66%, 76.82% 100.26%)};
 60% {clip-path: polygon(0% 21.35%, -0.52% 38.49%, 53.02% 100.14%, 76.82% 100.26%)};
 70% {clip-path: polygon(-0.26% 59.11%, -0.52% 38.49%, 53.02% 100.14%, 34.11% 99.48%)};
 80% {clip-path: polygon(-0.26% 59.11%, -0.78% 74.69%, 18.91% 99.62%, 34.11% 99.48%)};
 90% {clip-path: polygon(0.26% 99.73%, -0.78% 74.69%, 18.91% 99.62%)};
 100% {clip-path: polygon(0.26% 99.73%, 0.26% 92.4%, 6.15% 99.62%)};
`

const Question = styled.h1`
  text-align: left;
  padding: 0 10% 0 10%;
  font-size: 3rem;
`

const Answer = styled.p`
  text-align: left;
  padding: 0 10% 0 10%;
`

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 0 0.5rem 0 0.5rem;
`
const PersonalPicWrapper = styled.div`
  padding-top: 1rem;
`

const PersonalBasePicture = styled.div`
  background-image: url(${personalPhoto});
  background-size: cover;
  height: 24rem;
  width: 24rem;
  //clip-path: polygon(0.17% 0.38%, 100.03% -0.33%, 100.08% 100.99%);
  z-index: 1;
`
const PersonalGradientPicture = styled.div`
  background-image: url(${personalPhoto});
  background-size: cover;
  height: 24rem;
  width: 24rem;
  //clip-path: polygon(0.17% 0.38%, 100.03% -0.33%, 100.08% 100.99%);
  filter: sepia(100%);
  z-index: 2;
  position: absolute;
  animation-name: ${pictureAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

const UpArrow = styled.div`
  background-image: url(${ArrowUpwardIcon});
  background-size: cover;
  height: 2rem;
  width: 2rem;
`

const resolveIcons = (icons) => {
  switch (icons) {
    case 'social':
      return (
        <IconLinksWrapper>
          <IconLink href='https://github.com/matiaslang' target='_blank'>
            <GitHubIcon style={{ fontSize: '6rem' }} />
          </IconLink>
          <IconLink href='https://linkedin.com/in/langmatias' target='_blank'>
            <LinkedInIcon style={{ fontSize: '6rem' }} />
          </IconLink>
        </IconLinksWrapper>
      )
    case 'personal':
      return (
        <PersonalPicWrapper>
          <PersonalGradientPicture />
          <PersonalBasePicture />
        </PersonalPicWrapper>
      )
    default:
      return null
  }
}

const UpButton = (props) => {
  if (props.id > 0) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'up')}
        size='medium'
        className={props.classes.upButton}
      >
        <ArrowUpwardIcon />
      </IconButton>
    )
  }
  return null
}

const DownButton = (props) => {
  if (props.id < 3) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'down')}
        size='medium'
        className={props.classes.upButton}
      >
        <ArrowDownwardIcon />
      </IconButton>
    )
  } else if (props.id === 3) {
    return (
      <IconButton
        color='default'
        onClick={(e) => props.function(props.id, 'home')}
        size='medium'
        className={props.classes.upButton}
      >
        <HomeIcon />
      </IconButton>
    )
  }
}

const useStyles = makeStyles({
  upButton: {
    //position: 'absolute',
    //margin: '15rem',
    //top: 20,
  },
  downButton: {
    //position: 'absolute',
    //margin: '10rem',
    //padding: '10rem',
  },
})

const InfoObject = ({ infoData }) => {
  const classes = useStyles()

  const HandleMovement = (id, direction) => {
    if (direction === 'home') {
      document.getElementById('page0').scrollIntoView({ behavior: 'smooth' })
    }
    if (direction === 'up') {
      document
        .getElementById('page' + (id - 1))
        .scrollIntoView({ behavior: 'smooth' })
    }
    if (direction === 'down') {
      document
        .getElementById('page' + (id + 1))
        .scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Wrapper id={'page' + infoData.id}>
      <InnerWrapper>
        <UpButton
          function={HandleMovement}
          id={infoData.id}
          classes={classes}
        />
        <Question>{infoData.question}</Question>
        <Answer>{infoData.answer}</Answer>
        {resolveIcons(infoData.icons)}
        <DownButton
          function={HandleMovement}
          id={infoData.id}
          classes={classes}
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export default InfoObject
