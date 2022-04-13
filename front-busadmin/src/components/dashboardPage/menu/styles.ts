import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #3C63D2;
  min-width: 260px;
  max-width: 250px;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;
  h1 {
    text-align: center;
    color: #C5C6F0;

  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1.5em; */
  box-sizing: border-box;

  & > a:not(:last-of-type) {
          border-bottom: 2px solid rgba(255, 255, 255, 0.4);
        }

  img {
    color: #C5C6F0;
  }

  .linkActive {
    background: rgba(255, 255, 255, 0.2);
    /* border-radius: 10px; */
    /* margin: 0; */
    /* width: 100%; */

  }

  a {
    padding: 1.5em 1em;
    font-size: 20px;
    text-align: start;
    text-decoration: none;
    color: #C5C6F0;
    cursor: pointer;
    /* padding: 1em; */
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 1em; width: 100%;
    /* margin: 5px; */
    width: 100%;
    margin: 0;
    border: 1px solid transparent;


    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      /* border-radius: 10px; */
    }
  }
`;
