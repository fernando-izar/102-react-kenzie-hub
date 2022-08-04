import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 13px;

    .eye-control {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 0;

      .eye {
        margin-left: -50px;
        background-color: transparent;
        border: none;
      }
    }
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
