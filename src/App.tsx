import React from 'react';
import styled from 'styled-components';

import logoImg from './assets/img/logo.png';
import expertsImg from './assets/img/header/experts.png';
import learnersImg from './assets/img/header/learners.png';
import servicesImg from './assets/img/header/services.png';
import bgPhoto from './assets/img/bg-photo.png';
import demoPhoneImg1 from './assets/img/demo/phone-1.png';
import demoPhoneImg2 from './assets/img/demo/phone-2.png';
import demoPhoneImg3 from './assets/img/demo/phone-3.png';
import demoPhoneImg4 from './assets/img/demo/phone-4.png';
import demoPhoneImg5 from './assets/img/demo/phone-5.png';
import joinPhotoImg1 from './assets/img/join/photo-1.png';
import joinPhotoImg2 from './assets/img/join/photo-2.png';
import joinPhotoImg3 from './assets/img/join/photo-3.png';
import joinPhotoImg4 from './assets/img/join/photo-4.png';
import joinPhotoImg5 from './assets/img/join/photo-5.png';
import joinPhotoImg6 from './assets/img/join/photo-6.png';
import joinPhotoImg7 from './assets/img/join/photo-7.png';
import joinPhotoImg8 from './assets/img/join/photo-8.png';
import joinPhotoImg9 from './assets/img/join/photo-9.png';
import joinPhotoImg10 from './assets/img/join/photo-10.png';
import featureImg1 from './assets/img/features/feature-1.png';
import featureImg2 from './assets/img/features/feature-2.png';
import featureImg3 from './assets/img/features/feature-3.png';

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
const LabeledIcon = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderLogo = styled(LabeledIcon)`
  font-family: Futura, Calibri, Arial, sans-serif;
  span {
    font-size: 24px;
    margin-left: 40px;
  }
`;
const HeaderLink = styled(LabeledIcon)`
  font-family: 'Nunito Sans', Calibri, Arial, sans-serif;
  span {
    margin-left: 12px;
  }
`;
const HeaderLinks = styled.div`
  display: flex;
  a:last-child {
    margin-left: 83px;
  }
`;
const Header = styled.header`
  height: 90px;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 100%;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  &.wide {
    min-width: 138px;
    height: 46px;
    border-radius: 23px;
  }
  &.accent {
    background: #8726B9;
    color: white;
  }
`;
const PhotoBlock = styled.section`
  background: url('${bgPhoto}') no-repeat center bottom / cover;
  height: 100vh;
  ${Container} {
    height: 100%;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 68px;
    color: white;
    width: 531px;
  }
`;
const SectionDescription = styled.div`
  text-align: center;
  font-size: 18px;
  width: 730px;
  margin: 0 auto;
  .desc-txt-above {
    text-transform: uppercase;
  }
  .desc-txt-large {
    font-size: 52px;
    margin: 24px 0;
  }
  &.left {
    text-align: left;
    width: auto;
    margin: initial;
  }
`;
const DemoCard = styled.div`
  --card-radius: 32px;
  padding: 32px 32px 302px;
  border-radius: var(--card-radius);
  border: 1px solid grey;
  position: relative;
  overflow: hidden;
  .card-title {
    font-size: 24px;
    margin-bottom: 16px;
    color: var(--c-accent-purple);
  }
`;
const DemoCardPhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
  left: 0;
  margin-top: auto;
  --move-offset: calc(50% - var(--card-radius));
  .img-wrapper {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, -28px);
  }
  img {
    border-radius: 16px 16px 0 0;
    box-shadow: 0 0 22px rgba(0, 0, 0, 0.35);
  }
  .img-1,
  .img-4 {
    transform: translateX(calc(-1 * var(--move-offset)));
  }
  .img-2,
  .img-5 {
    transform: translateX(var(--move-offset));
  }
`;
const DemoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 47px;
  justify-content: space-between;
`;
const JoinCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  img {
    border-radius: 12px;
  }
  &.left {
    img {
      align-self: flex-end;
    }
    img:nth-child(2n) {
      align-self: flex-start;
    }
  }
  &.right {
    img {
      align-self: flex-start;
    }
    img:nth-child(2n) {
      align-self: flex-end;
    }
  }
`;
const FeatureCard = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 24px;
  padding: 28px 22px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  .card-title {
    font-size: 24px;
    margin: 12px 0 6px;
  }
  .card-description {
    font-size: 16px;
  }
`;
const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 53px;
  row-gap: 32px;
`;
const DemoSection = styled.section`
  ${SectionDescription} {
    margin: 40px auto 80px;
  }
`;
const JoinSection = styled.section`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 160px auto;
  }
  ${Button} {
    padding: 0 40px;
    margin-top: 24px;
    height: 52px;
    border-radius: 52px;
  }
  ${SectionDescription} {
    width: 600px;
  }
`;
const FeaturesSection = styled.section`
  margin-bottom: 175px;
  ${SectionDescription} {
    margin-bottom: 60px;
  }
`;
const Footer = styled.footer`
  background: var(--c-accent-purple);
  padding: 48px 0;
  color: white;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 118px;
    li.domain {
      font-size: 24px;
    }
  }
  p {
    margin-top: 48px;
  }
`;

function App() {
  return (
    <div>
      <Header>
        <Container>
          <HeaderLogo>
            <img src={logoImg} alt="Logo"/>
            <span style={{ color: 'var(--c-accent-purple)', fontSize: '24px' }}>Wisdocity</span>
          </HeaderLogo>
          <HeaderLinks>
            <a href="#">
              <HeaderLink>
                <img src={expertsImg} alt="Icon"/>
                <span>Experts</span>
              </HeaderLink>
            </a>
            <a href="#">
              <HeaderLink>
                <img src={learnersImg} alt="Icon"/>
                <span>Learners</span>
              </HeaderLink>
            </a>
          </HeaderLinks>
          <div>
            <Button><img src={servicesImg} alt="Services"/></Button>
            <Button className="wide">Sign In</Button>
            <Button className="wide accent">Sign Up</Button>
          </div>
          </Container>
      </Header>
      <PhotoBlock>
        <Container>
          <p>Lorem ipsum dolor sit amet</p>
        </Container>
      </PhotoBlock>
      <DemoSection>
        <Container>
          <SectionDescription>
            <p className="desc-txt-above"><a>Learn Here</a></p>
            <h2 className="desc-txt-large">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="desc-txt-below">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </SectionDescription>
          <DemoRow>
            <DemoCard>
              <p className="card-title">Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <DemoCardPhoto>
                <div className="img-wrapper">
                  <img src={demoPhoneImg1} alt="Phone" className="img-1" />
                </div>
                <div className="img-wrapper">
                  <img src={demoPhoneImg2} alt="Phone" className="img-2" />
                </div>
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <DemoCardPhoto>
                <div className="img-wrapper">
                  <img src={demoPhoneImg3} alt="Phone" className="img-3" />
                </div>
              </DemoCardPhoto>
            </DemoCard>
            <DemoCard>
              <p className="card-title">Lorem ipsum dolor sit amet consectetur</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <DemoCardPhoto>
                <div className="img-wrapper">
                  <img src={demoPhoneImg4} alt="Phone" className="img-4" />
                </div>
                <div className="img-wrapper">
                  <img src={demoPhoneImg5} alt="Phone" className="img-5" />
                </div>
              </DemoCardPhoto>
            </DemoCard>
          </DemoRow>
        </Container>
      </DemoSection>
      <JoinSection>
        <Container>
          <JoinCol className="left">
            <img src={joinPhotoImg1} alt="Photo" />
            <img src={joinPhotoImg2} alt="Photo" />
            <img src={joinPhotoImg3} alt="Photo" />
            <img src={joinPhotoImg4} alt="Photo" />
            <img src={joinPhotoImg5} alt="Photo" />
          </JoinCol>
          <SectionDescription>
            <p className="desc-txt-above">Join the Best</p>
            <p className="desc-txt-large">Lorem ipsum dolor sit amet consectetur</p>
            <p className="desc-txt-below">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div>
              <Button className="wide accent">Become an expert</Button>
            </div>
          </SectionDescription>
          <JoinCol className="right">
            <img src={joinPhotoImg6} alt="Photo" />
            <img src={joinPhotoImg7} alt="Photo" />
            <img src={joinPhotoImg8} alt="Photo" />
            <img src={joinPhotoImg9} alt="Photo" />
            <img src={joinPhotoImg10} alt="Photo" />
          </JoinCol>
        </Container>
      </JoinSection>
      <FeaturesSection>
        <Container>
          <SectionDescription className="left">
            <p className="desc-txt-large">Key features of Wisdocity</p>
            <p className="desc-txt-below">Wisdocity offers a range of powerful features designed to enhance your learning experience:</p>
          </SectionDescription>
          <FeatureList>
            <FeatureCard>
              <img src={featureImg1} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </FeatureCard>
            <FeatureCard>
              <img src={featureImg2} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p></FeatureCard>
            <FeatureCard>
              <img src={featureImg3} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </FeatureCard>
            <FeatureCard>
              <img src={featureImg1} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </FeatureCard>
            <FeatureCard>
              <img src={featureImg2} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </FeatureCard>
            <FeatureCard>
              <img src={featureImg3} alt="Icon" />
              <p className="card-title">Lorem Ipsum</p>
              <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius molestias possimus quas quisquam, voluptatibus!</p>
            </FeatureCard>
          </FeatureList>
        </Container>
      </FeaturesSection>
      <Footer>
        <Container>
          <ul>
            <li className="domain">
                <a>Wisdocity.ai</a>
            </li>
            <li>
                <a>Learner</a>
            </li>
            <li>
                <a>Expert</a>
            </li>
            <li>
                <a>About Us</a>
            </li>
            <li>
                <a>Apps</a>
            </li>
          </ul>
          <p style={{ textAlign: 'center' }}>Copyright &copy; 2023 Wisdocity AI</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
