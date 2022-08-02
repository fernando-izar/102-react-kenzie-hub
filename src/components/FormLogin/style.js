import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-bottom: 25px;
    gap: 10px;

    div {
      gap: 12px;

      p {
        display: flex;
        justify-content: center;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 18px;
        color: var(--Grey-1);
      }
    }
  }
`;
