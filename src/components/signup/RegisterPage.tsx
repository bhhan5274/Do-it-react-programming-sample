import React, { FC } from 'react';
import { ModalContext } from '../../context';
import Form, { FormContext } from '../../ui/Form';
import Spacing from '../../ui/Spacing';
import Text from '../../ui/Text';
import Input from '../../ui/Input';
import InlineList from '../../ui/InlineList';
import Button from '../../ui/Button';

export type RegisterPageProps = Readonly<{
  createUser?: any;
  loading?: boolean;
}>;

const RegisterPage: FC<RegisterPageProps> = ({ createUser, loading }) => {
  const handleSubmit = (values: any, closeModal: any) => {
    const formValue = {
      ...values,
    };

    createUser(formValue, closeModal);
  };

  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <Form onSubmit={(values: any) => handleSubmit(values, closeModal)}>
          <FormContext.Consumer>
            {({ onChange }) => (
              <Spacing horizontal={4} vertical={8}>
                <Text xlarge bold>
                  회원 등록
                </Text>
                <Spacing bottom={2}>
                  <Input name="userId" label="사용자 아이디" onChange={onChange} />
                </Spacing>
                <Spacing bottom={2}>
                  <Input name="totalAmount" type="number" label="자산 총액" onChange={onChange} />
                </Spacing>
                <InlineList spacingBetween={1}>
                  <Button type="submit" primary disabled={loading}>
                    회원 등록
                  </Button>
                  <Button onPress={closeModal} disabled={loading}>
                    취소
                  </Button>
                </InlineList>
              </Spacing>
            )}
          </FormContext.Consumer>
        </Form>
      )}
    </ModalContext.Consumer>
  );
};

export default RegisterPage;
