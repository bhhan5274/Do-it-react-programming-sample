import React, { FC } from 'react';

export default (loadingMessage: any = '로딩중') =>
  (WrappedComponent: FC) => {
    const WithLoading: FC<any> = ({ isLoading, ...props }) => {
      if (isLoading) {
        return loadingMessage;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...props} />;
    };

    return WithLoading;
  };
