import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  background: blue;
  min-width: 260px;
  max-width: 250px;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  h1 {
    color: #2d2d2d;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  box-sizing: border-box;

  .linkActive {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 10px;

  }

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 1em;
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 1em;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
      /* border: 1px solid rgba(255, 255, 255, 0.6); */
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
`;
