import type React from 'react';

export interface ProductsPaginationButtonProps extends React.PropsWithChildren {
  onClick: () => void;
  isDisabled: boolean;
}
