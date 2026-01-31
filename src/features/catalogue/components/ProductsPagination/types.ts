import type React from 'react';

export interface IProductsPaginationButtonProps extends React.PropsWithChildren {
  onClick: () => void;
  isDisabled: boolean;
}
