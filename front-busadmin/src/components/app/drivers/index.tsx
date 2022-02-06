import { DashboardPage } from "../../dashboardPage";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers);
  console.log(drivers);
  
  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);
  return (
    <DashboardPage title="Motoristas">
      
    </DashboardPage>
  )
}