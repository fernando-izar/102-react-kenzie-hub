import styled, { css } from "styled-components";

export const MainButton = styled.button`
  /* width: 260px; */
  height: 38.5px;
  @media (min-width: 490px) {
    /* width: 324px; */
    height: 48px;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  border: 1.2182px solid;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--White);

  ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return css`
          background: var(--Color-primary);
          border-color: var(--Color-primary);

          :hover {
            background-color: var(--Color-primary-Focus);
          }
        `;
      case "negative":
        return css`
          background: var(--Color-primary-Negative);
          border-color: var(--Color-primary-Negative);
        `;
      case "disable":
        return css`
          background: var(--Grey-1);
          border-color: var(--Grey-1);

          :hover {
            background: var(--Grey-2);
            border-color: var(--Grey-2);
          }
        `;

      default:
        return false;
    }
  }}
`;

export const HeaderButton = styled.button`
  width: 80px;
  height: 32px;
  @media (min-width: 490px) {
    width: 68px;
    height: 40px;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;
  border-radius: 4px;
  background-color: var(--Grey-3);
  @media (min-width: 400px) {
    background-color: var(--Grey-2);
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  color: var(--Grey-0);
`;
