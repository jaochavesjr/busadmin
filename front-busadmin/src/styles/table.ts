import styled from "styled-components";

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
  table {
    border-collapse: collapse;
    border-spacing: 5em 0;
    thead {
      tr {
        th {
          font-size: 18px;
          text-align: start;
          padding: 1em 5em 1em 1em;
          padding-right: 10em;
        }
      }
    }
    tbody {
      tr {
        td {
          font-size: 18px;
          text-align: start;
          padding: 1em 5em 1em 1em;
        }
      }
      tr:hover {
        background: #d1d1d1cf;
      }
      tr:not(:last-of-type) {
        border-bottom: 2px solid #a6a6a6;
      }
    }
  }
`;
