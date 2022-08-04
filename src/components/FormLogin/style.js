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

    .eye-control {
      display: flex;
      flex-direction: row;
      align-items: center;

      .eye {
        margin-left: -50px;
        background-color: transparent;
        border: none;
      }
    }

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

    .Toastify__toast {
      width: 20%;
    }
  }
`;
