import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 24px;
  border-radius: 22px;
  margin-top: 48px;
  background: rgba(255, 255, 255, 0.75);

  h1 {
    color: #121417;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 24px;
  }

  p {
    color: #121417;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;
