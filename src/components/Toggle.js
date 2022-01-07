import React from 'react'
import styled from 'styled-components';
import moonIcon from '../icons/moon.png';
import sunIcon from '../icons/sun.png';

const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;
    cursor: pointer;

    img {
        width: 2.5rem;
        height: auto;
        transition: all 0.25s linear;

        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        &:nth-child(2) {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`;

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
  
    return (
      <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
        <img src={sunIcon} alt="sun" />
        <img src={moonIcon} alt="moon" />
      </ToggleContainer>
    );
  };

export default Toggle;
