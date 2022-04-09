import { DashboardPage } from "../../dashboardPage";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { Field } from "../../form/Field";
import { IDriver } from "../../../types/drivers";
import { Container, Grid } from "./styles";
import { Button } from "../../Button";

export const AddDrivers = () => {
  const dispatch = useAppDispatch();

  const { drivers } = useAppSelector((state) => state.drivers);
  
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
          <Container>
            <Grid>
              <Controller
                name="nickname"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Apelido"
                    placeholder="Apelido"
                    error={errors.nickname?.message}
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
                name="cpf"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="CPF"
                    placeholder="CPF"
                    error={errors.cpf?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="birthday"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Data de nascimento"
                    placeholder="Seu nome"
                    error={errors.birthday?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="license"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Número da habilitação"
                    placeholder="habilitação"
                    error={errors.license?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="license_expiration_date"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Data de vencimento da habilitação"
                    placeholder="Data de vencimento"
                    error={errors.license_expiration_date?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="cellphone_one"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Celular 1"
                    placeholder="celular"
                    error={errors.cellphone_one?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="cellphone_two"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Celular 2"
                    placeholder="celular"
                    error={errors.cellphone_two?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Button title="Salvar motorista"/>
          </Container>
        </form>
      </FormProvider>
    </DashboardPage>
  )
}