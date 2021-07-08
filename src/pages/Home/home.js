import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import questionsAndAnswers from '../../assets/questionsAndAnswers.json';
import styled from 'styled-components';
import PersistentDrawerLeft from '../../components/Menudrawer'
import InfoObject from './InfoObject';

const Wrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`

const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 0 });

  return (
    <Wrapper>
      <PersistentDrawerLeft />
      <section ref={scrollRef}>
        {questionsAndAnswers.map(data => (
          <InfoObject infoData={data} />
        ))}
      </section>
      Hoem version 2
    </Wrapper>
  );
}

export default Home;
