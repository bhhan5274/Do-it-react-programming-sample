import React, { FC, ReactElement } from 'react';

export interface TableRowProps {
  baseline?: boolean;
  isHeader?: boolean;
}

const TableRow: FC<TableRowProps> = ({ children, baseline, isHeader }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <tr>{React.Children.map(children, (child) => React.cloneElement(child, { baseline, isHeader }))}</tr>;
};

export default TableRow;
