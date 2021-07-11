import React, { FC, ReactElement } from 'react';

const TableBody: FC = ({ children }) => {
  const { length } = React.Children.toArray(children);

  return (
    <tbody>
      {React.Children.map(children, (child, index) => {
        const baseline = index < length - 1;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return React.cloneElement(child, { baseline });
      })}
    </tbody>
  );
};

export default TableBody;
