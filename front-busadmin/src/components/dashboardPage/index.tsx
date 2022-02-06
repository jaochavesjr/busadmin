import { useEffect } from 'react';
import {
  Container,
} from './styles';

interface IProps {
  title: string;
}

export const DashboardPage = ({ title }: IProps) => {
  useEffect(() => {
      document.title = `${title} - Bus Admin`;
  }, []);

  return (
    <Container>
      
    </Container>
  )
}