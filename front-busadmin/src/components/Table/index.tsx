import { Link } from 'react-router-dom';
import { ContainerTable } from './styles';

interface Props {
  thead: string[];
  tbody: any[];
};

export const Table = ({ thead, tbody }: Props) => {
  return (
    <ContainerTable>
      <Link to={"/dashboard/motoristas/adicionar"}>Adicionar motorista</Link>
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
          </>

          ))}
        </tbody>
      </table>
    </ContainerTable>
  );
};
