import { ReactNode, FC } from 'react';
import ContainerStyle from './Container.module.scss';

type ContainerType = {
  width?: number;
  children: ReactNode;
};

export const Container: FC<ContainerType> = ({ width, children }) => (
  <div style={{ width }} className={ContainerStyle.container}>
    {children}
  </div>
);
