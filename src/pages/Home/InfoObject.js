import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Wrapper = styled.div`
  background-color: papayawhip;
  margin: 3rem 1rem 6rem 1rem;
  height: 100vh;
  padding: 1rem;
`;

const InnerWrapper = styled.div`
  border: 5px solid red;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconLinksWrapper = styled.div`
  padding-top: 1rem;
`;

const Question = styled.h1`
  text-align: left;
  padding: 0 10% 0 10%;
  font-size: 3rem;
`;

const Answer = styled.p`
  text-align: left;
  padding: 0 10% 0 10%;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 0 .5rem 0 .5rem;
`;

const resolveIcons = (icons) => {
  switch(icons) {
    case 'social':
      return (
        <IconLinksWrapper>
          <IconLink href="https://github.com/matiaslang" target="_blank">
            <GitHubIcon style={{fontSize: "6rem"}}/>
          </IconLink>
          <IconLink href="https://linkedin.com/in/langmatias" target="_blank">
            <LinkedInIcon style={{fontSize: "6rem"}}/>
          </IconLink>
        </IconLinksWrapper>
      );
    default:
      return null;
  }
}

const InfoObject = ({infoData}) => {
  return (
    <Wrapper id={'InfoObject' + infoData.id}>
      <InnerWrapper>
        <Question>{infoData.question}</Question>
        <Answer>{infoData.answer}</Answer>
        {resolveIcons(infoData.icons)}
      </InnerWrapper>
    </Wrapper>
  );
}

export default InfoObject;
