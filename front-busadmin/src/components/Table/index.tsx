import { Link } from 'react-router-dom';
import { ContainerTable } from './styles';
import { useNavigate } from 'react-router';
interface Props {
  thead: string[];
  tbody: any[];
};

export const Table = ({ thead, tbody }: Props) => {
  const navigate = useNavigate();

  const navigateForDetailsDriver = (id: string) => {
    navigate(`/dashboard/motoristas/detalhes/${id}`);
  };

  return (
    <ContainerTable>
      <Link to={"/dashboard/motoristas/adicionar"}>Adicionar motorista</Link>
      { tbody &&(<table>
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
          {tbody && tbody.map((driver) => (
            <>
              <tr onClick={() => navigateForDetailsDriver(driver.id)}>
                <td>{driver.full_name}</td>
                <td>{driver.cpf}</td>
                <td>{driver.birthday}</td>
                <td>{driver.cellphone_one}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>)}
    </ContainerTable>
  );
};
