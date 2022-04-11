import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { fetchDrivers } from "../../../store/slices/drivers/midleware";
import { DashboardPage } from "../../dashboardPage"
import { Table } from "../../Table"

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers );

  console.log(drivers);

  const thead = [
    'Nome',
    'Documento',
    'Data de nascimento',
    'Celular',
  ];

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);

  return (
    <DashboardPage title="Motoristas">
      <Table thead={thead} tbody={drivers} />
    </DashboardPage>
  )
}