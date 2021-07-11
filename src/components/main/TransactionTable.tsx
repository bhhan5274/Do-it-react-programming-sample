import React, { FC } from 'react';
import Spacing from '../../ui/Spacing';
import Text from '../../ui/Text';
import Table from '../../ui/Table';
import TableHead from '../../ui/Table/TableHead';
import TableRow from '../../ui/Table/TableRow';
import TableCell from '../../ui/Table/TableCell';
import TableBody from '../../ui/Table/TableBody';
import WithLoading from '../../ui/Hoc/WithLoading';

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);

export type Transaction = {
  id: string;
  name: string;
  totalPrice: string;
  currentPrice: string;
  datetime: string;
};

export interface TransactionTableProps {
  transactions?: Transaction[];
}

const TransactionTable: FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">코인</TableCell>
          <TableCell align="center">시가 총액</TableCell>
          <TableCell align="center">현재 시세</TableCell>
          <TableCell align="right">거래 시간</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions &&
          transactions.map(({ id, name, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default WithLoading(LoadingMessage)(TransactionTable);
