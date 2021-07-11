import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Spacing from '../ui/Spacing';
import Text from '../ui/Text';

interface MatchParams {
  name: string;
}

type NotFoundProps = RouteComponentProps<MatchParams>;

const NotFound: FC<NotFoundProps> = ({ match: { url } }) => {
  return (
    <>
      <Spacing bottom={2}>
        <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
      </Spacing>
      <Link to="/">메인 페이지로 이동</Link>
    </>
  );
};

export default NotFound;
