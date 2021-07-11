import React, { FC } from 'react';
import { styled } from '../../theme/theme';

const Table: FC = ({ children }) => {
  return <TableDiv>{children}</TableDiv>;
};

const TableDiv = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export default Table;
