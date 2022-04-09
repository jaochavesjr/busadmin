import * as yup from 'yup';
import CPF from "cpf";

export const schema = yup.object().shape({
  full_name: yup
  .string()
  .required("Você precisa digitar seu nome.")
  .min(5, "Seu nome precisa ter no mínimo 5 caracteres.")
  .max(40, "Seu nome pode ter no máximo 40 caracteres.")
  .matches(
    /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
    "O nome deve conter apenas letras."
  )
  .matches(/^[\S]+(\s[\S]+)+\s*$/gms, "Digite seu nome completo."),
  cpf: yup
    .string()
    .required("Você precisa digitar o CPF.")
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve ter formato 000.000.000-00")
    .test("is-valid-cpf", "O CPF precisa ser válido.", (cpf: any) => CPF.isValid(cpf)),
  birth_date: yup.string().required("Você precisa digitar a data do seu nascimento."),
  password: yup
    .string()
    .required("Você precisa digitar uma senha com pelo menos 8 caracteres.")
    .min(8, "A senha deve ter no mínimo 8 caracteres."),
  password_confirmation: yup
    .string()
    .required("Você precisa confirmar a senha.")
    .oneOf([yup.ref("password"), null], "A senha deve ser a mesma"),
});
