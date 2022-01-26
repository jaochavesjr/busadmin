import { Container } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validations';
import { login, createUser } from '../../store/slices/login/middleware';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';

interface ILogin {
  username: string;
  password: string;
}

export const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const create = async () => {
      const response = await dispatch(createUser());
      console.log(response);
    };
    create();
    
  }, []);

  const onSubmit = async (data: ILogin) => {
    console.log(data);

    // const response = await dispatch(login(data));
    // console.log(response);
  };

  return (
    <Container>
      <div>
        <h3>Faça seu login!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input { ...register('username') } type="text" placeholder="usuário" />
          <span>{errors?.username?.message}</span>
          <input { ...register('password') } type="password" placeholder="senha" />
          <span>{errors?.password?.message}</span>
          <button type='submit'>Entrar</button>
        </form>
      </div>
    </Container>
  );
};
