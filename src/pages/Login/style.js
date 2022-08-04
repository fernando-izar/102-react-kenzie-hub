import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--Grey-4);

  header {
    margin: 58px auto 20px;
    padding: 0 12px;

    width: 100%;
    max-width: 290px;
    @media (min-width: 490px) {
      max-width: 350px;
    }

    display: flex;
    justify-content: center;

    img {
      width: 101px;
      height: 14px;
      @media (min-width: 490px) {
        width: 144px;
        height: 20px;
      }
    }
  }

  main {
    margin: 0 auto;
    padding: 0 12px;

    width: 100%;
    max-width: 290px;
    height: 403px;

    @media (min-width: 490px) {
      max-width: 350px;
      height: 502px;
    }

    display: flex;
    flex-direction: column;

    background-color: var(--Grey-3);
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;

    .TitleLogin {
      align-items: center;

      padding: 33px 15px 20px;
      gap: 18px;
    }
  }
`;
