import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    padding: 2em;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 100%;
    border: solid 1px #d8d8d8;
    max-height: 400px;
    height: 100%;
    
    h3 {
      font-size: 36px;
      font-family: 'Roboto', sans-serif;
    }
    
    input {
      padding: 1em;
      font-size: 16px;
      width: 100%;
      margin: 10px;
      border: solid 1px #d8d8d8;
      border-radius: 10px;
    }
  }
`;
