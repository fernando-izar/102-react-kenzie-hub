import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 235px;

  background-color: var(--Grey-4);

  header {
    margin: 58px auto;
    padding: 0 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: 250px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      max-width: 320px;
    }

    @media (min-width: 490px) {
      max-width: 400px;
    }
  }

  main {
    margin: 0 auto;
    padding: 0 12px;

    width: 100%;
    max-width: 320px;
    @media (min-width: 490px) {
      max-width: 400px;
    }

    display: flex;
    flex-direction: column;

    background-color: var(--Grey-3);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;

    div {
      align-items: center;

      padding: 22px 15px 22px;
      gap: 18px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      color: var(--Grey-1);
    }
  }
`;
