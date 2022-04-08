import { ContainerTable } from './styles';

interface Props {
  thead: string[];
  tbody: any[];
};

export const Table = ({ thead, tbody }: Props) => {
  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            {thead.map((title) => (
              <th>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((driver) => (
            <>
              <tr>
                <td>{driver.full_name}</td>
                <td>{driver.cpf}</td>
                <td>{driver.birthday}</td>
                <td>{driver.cellphone_one}</td>
              </tr>
              <tr>
                <td>{driver.full_name}</td>
                <td>{driver.cpf}</td>
                <td>{driver.birthday}</td>
                <td>{driver.cellphone_one}</td>
              </tr>
              <tr>
                <td>{driver.full_name}</td>
                <td>{driver.cpf}</td>
                <td>{driver.birthday}</td>
                <td>{driver.cellphone_one}</td>
              </tr>
          </>

          ))}
        </tbody>
      </table>
    </ContainerTable>
  );
};
