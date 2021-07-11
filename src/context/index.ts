import React from 'react';

export interface ModalContextProps {
  openModal?: any;
  closeModal?: any;
}

export const ModalContext = React.createContext<ModalContextProps>({});
