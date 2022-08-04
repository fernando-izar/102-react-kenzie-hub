import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;
    --Sucess: #3FE864;
    --Negative: #E83F5B;
    --White: #ffffff;
    --Black: #000000;


* {
    margin: 0;
    box-sizing: border-box;
}

::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--Grey-1);
:hover {
    color: var(--Grey-0);
}
}

button {
    cursor: pointer;
}

ul, ol, li {
    list-style: none;
}

div {
    display: flex;
    flex-direction: column;
}

a, u {
    text-decoration: none;
}



`;
