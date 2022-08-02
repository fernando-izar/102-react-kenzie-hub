import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  option {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--Grey-1);
  }
`;
