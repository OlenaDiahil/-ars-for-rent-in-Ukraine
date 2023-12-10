import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #121417;
`;

export const HeaderDiv = styled.div`
justify-content: space-between;
  display: flex;
  align-items: center;
  height: 56px;
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.43;

  a {
    border-radius: 12px;
    border: 3px solid #3470ff;
    padding: 6px 12px;

    &.active {
      background: #3470ff;
      color: var(--White, #fff);

      &:hover,
      &:focus {
        background: #0b44cd;
      }
    }

    &:hover,
    &:focus {
      border: 3px solid #0b44cd;
    }
  }
`;
