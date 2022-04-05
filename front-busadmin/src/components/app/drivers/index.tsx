import { DashboardPage } from "../../dashboardPage";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { Field } from "../../form/Field";
import { IDriver } from "../../../types/drivers";
import { Grid } from "./styles";

export const Drivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers);
  console.log(drivers);
  
  const form = useForm<IDriver>({
    resolver: yupResolver(schema),
  });

  const {
    formState: { errors },
  } = form;

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);

  return (
    <DashboardPage title="Motoristas">
      <FormProvider {...form}>
        <form>
          <Grid>
            <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
             <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
             <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
             <Controller
              name="full_name"
              control={form.control}
              render={({ field }) => (
                <Field
                  label="Nome completo"
                  placeholder="Seu nome"
                  error={errors.full_name?.message}
                  {...field}
                />
              )}
            />
          </Grid>

        </form>
      </FormProvider>
    </DashboardPage>
  )
}