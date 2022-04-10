import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

import { useAppDispatch } from "../../../store/hooks";
import { fetchDrivers } from "../../../store/slices/drivers/midleware";
import { IDriver } from "../../../types/drivers";
import { setError } from "../../../store/slices/errors";

import { DashboardPage } from "../../dashboardPage";
import { Field } from "../../form/Field";
import { Button } from "../../Button";

import { schema } from "./validations";
import { Container, Grid } from "./styles";
import { dateMask } from "./masks";
import { createDriver } from "./middleware";

export const AddDrivers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<IDriver>({
    resolver: yupResolver(schema),
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (data: IDriver) => {
    try {
      const response = await dispatch(createDriver(data));
      console.log(response.payload);
      if ((response.payload as IDriver).id) {
        navigate('/dashboard/motoristas');
      }
    } catch (error) {
      setError('Ocorreu algum erro, por favor tente novamente!')
      console.log(error);      
    }
  };

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);

  return (
    <DashboardPage title="Motoristas">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Container>
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
                name="cpf"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="CPF"
                    placeholder="CPF"
                    mask="000.000.000-00"
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
                    {...dateMask}
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
                    {...dateMask}
                  />
                )}
              />
              <Controller
                name="cellphone_one"
                control={form.control}
                render={({ field }) => (
                  <Field
                    label="Celular 1"
                    mask="(00) 00000-0000"
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
                    mask="(00) 00000-0000"
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