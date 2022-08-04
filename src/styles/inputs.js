import styled, { css } from "styled-components";

export const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  line-height: 0px;
  color: var(--Grey-0);
`;

export const Input = styled.input`
  width: 100%;
  display: flex;

  flex-direction: row;
  align-items: center;

  padding: 12px 16.2426px;
  gap: 10.15px;

  height: 38px;
  @media (min-width: 490px) {
    height: 48px;
  }

  background: var(--Grey-2);

  border: 1.2182px solid var(--Grey-2);
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: var(--Grey-1);

  :hover {
    border-color: var(--Grey-0);
  }
`;

export const Select = styled.select`
  width: 100%;
  display: flex;

  flex-direction: row;
  align-items: center;

  padding: 0px 16.2426px;
  gap: 10.15px;

  height: 48px;

  background: var(--Grey-2);

  border: 1.2182px solid var(--Grey-2);
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: var(--Grey-1);

  :hover {
    border-color: var(--Grey-0);
  }
`;

export const HelperText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10.1517px;
  line-height: 0px;
  color: var(--Grey-1);
`;
