import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 1em 2em;
  background: #F7F8FB;
  background: #fff;
  align-items: center;
  gap: 5em;

  h2 {
    width: 250px;
    color: #2d2d2d;
    font-size: 26px;
  }

  .container-search {
    display: flex;
    max-width: 500px;
    width: 100%;
    .input-search {
      border-radius: 6px;
      padding: .8em 0.7em;
      width: 100%;
      font-size: 20px;
    }
  }
`;

