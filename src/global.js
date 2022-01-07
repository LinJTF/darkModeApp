import {  createGlobalStyle  } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        align-items: center;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        transition: all 0.3s linear;
    }

    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }

    footer a {
        text-decoration: none;
        color: inherit;
    }
`;

