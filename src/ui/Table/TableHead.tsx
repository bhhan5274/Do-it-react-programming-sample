import React, { FC, ReactElement } from 'react';

const TableHead: FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <thead>{React.Children.map(children, (child) => React.cloneElement(child, { isHeader: true }))}</thead>;
};

export default TableHead;
