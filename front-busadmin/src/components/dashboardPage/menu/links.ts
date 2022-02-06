import { iconBus, iconClient, iconDashboard, iconDriver, iconTravels } from "../../utils/imagesPath";

interface IProps {
  label: string;
  href: string;
  icon: ICon;
}

interface ICon {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const links: IProps[] = [
  {
    label: 'Dashboard',
    href: '',
    icon: {
      src: iconDashboard,
      alt: 'icone dashboard',
      width: 30,
      height: 30,
    }
  },
  {
    label: 'Clientes',
    href: 'clientes',
    icon: {
      src: iconClient,
      alt: 'icone cliente',
      width: 30,
      height: 30,
    }
  },
  {
    label: 'Motoristas',
    href: 'motoristas',
    icon: {
      src: iconDriver,
      alt: 'icone motorista',
      width: 30,
      height: 30,
    }
  },
  {
    label: 'Ônibus',
    href: 'onibus',
    icon: {
      src: iconBus,
      alt: 'icone ônibus',
      width: 30,
      height: 30,
    }
  },
  {
    label: 'Viagens',
    href: 'viagens',
    icon: {
      src: iconTravels,
      alt: 'icone viagens',
      width: 30,
      height: 30,
    }
  },
];
