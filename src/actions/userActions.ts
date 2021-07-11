import createActions from './createActions';

const { create } = createActions('users');

export const createUser = (data: any, onComplete: any) => {
  return create(
    data,
    {},
    {
      notification: {
        success: '회원 가입이 성공적으로 완료되었습니다.',
        error: '회원 가입에 실패했습니다.',
      },
      onSuccess: onComplete,
      name: 'user',
    },
  );
};
