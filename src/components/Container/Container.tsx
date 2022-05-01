import { ReactNode, FC } from 'react';

type ContainerType = {
  width?: number;
  children: ReactNode;
};

export const Container: FC<ContainerType> = ({ width = 1237, children }) => (
  <div style={{
    width, margin: '0 auto', position: 'relative', height: '100%',
  }}
  >
    {children}
  </div>
);
