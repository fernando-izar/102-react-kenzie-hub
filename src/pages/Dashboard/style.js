import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--Grey-4);

  .div-header {
    border: 1px solid var(--Grey-3);
    header {
      margin: 58px 0;
      @media (min-width: 640px) {
        margin: 58px 20vw;
      }
      padding: 0 12px;

      /* width: 100%; */
      /* max-width: 320px; */
      @media (min-width: 640px) {
        max-width: 800px;
      }

      display: flex;
      justify-content: space-between;
    }
  }

  .div-main {
    padding: 50px 0;

    border: 1px solid var(--Grey-3);
    main {
      margin: 0;
      @media (min-width: 640px) {
        margin: 0px 20vw;
      }
      padding: 0 12px;

      /* width: 100%; */
      /* max-width: 320px; */
      @media (min-width: 640px) {
        max-width: 800px;
      }

      display: flex;
      flex-direction: column;
      @media (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
      }
      gap: 10px;
    }
  }

  .container-techs {
    .techs {
      display: none;
      @media (min-width: 640px) {
        margin: 58px 20vw;
        padding: 0 12px;

        max-width: 800px;

        display: flex;
        flex-direction: column;
        gap: 30px;
      }
    }
  }
`;
