import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const CarWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  background-size: cover;
  background-position-x: 45%;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Favoritebutton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
`;

export const CarImage = styled.img`
  border-radius: 12px;
  object-fit: cover;
  overflow: hidden;
  width: 274px;
  height: 268px;
`;

export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h2 {
    color: #121417;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  span {
    color: #3470ff;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    color: #121417;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const CarInfo = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
`;

export const LearnButton = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 10px 90px;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  margin-top: 28px;
  margin-top: auto;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
