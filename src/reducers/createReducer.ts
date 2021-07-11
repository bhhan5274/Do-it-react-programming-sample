import { handle } from 'redux-pack';
import { CREATE, UPDATE, FETCH, FETCH_LIST, RESET } from '../actions/actionTypes';

export type CreateState = Readonly<{
  ids?: [];
  entities?: any;
  loadingState?: any;
  errorState?: any;
  pagination?: any;
  pages?: any;
  id?: any;
}>;

export default (...reducerNames: string[]) => {
  return reducerNames.reduce((apiReducers: any, name) => {
    const initState = {
      ids: [],
      entities: {},
      loadingState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      errorState: {
        [`${CREATE}/${name}`]: false,
        [`${UPDATE}/${name}`]: false,
        [`${FETCH}/${name}`]: false,
        [`${FETCH_LIST}/${name}`]: false,
      },
      pagination: {},
      pages: {},
      id: '',
    };

    // eslint-disable-next-line no-param-reassign
    apiReducers[name] = (state = initState, action: any) => {
      const { type, payload, meta } = action;
      const { resourceName, key } = meta || {};

      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case CREATE:
        case UPDATE:
        case FETCH:
        case FETCH_LIST: {
          return handle(state, action, {
            start: (prevState) => ({
              ...prevState,
              loadingState: {
                ...prevState.loadingState,
                [`${type}/${name}`]: true,
              },
              errorState: {
                ...prevState.errorState,
                [`${type}/${name}`]: false,
              },
            }),
            success: (prevState) => {
              const { data } = payload;
              if (type === FETCH_LIST) {
                const { pageNumber, pageSize } = meta || {};
                const ids = data.map((entity: { id: any }) => entity.id);
                const entities = data.reduce(
                  (finalEntities: any, entity: { [x: string]: any }) => ({
                    ...finalEntities,
                    [entity[key]]: entity,
                  }),
                  {},
                );
                return {
                  ...prevState,
                  ids,
                  entities,
                  loadingState: {
                    ...prevState.loadingState,
                    [`${type}/${name}`]: false,
                  },
                  errorState: {
                    ...prevState.errorState,
                    [`${type}/${name}`]: false,
                  },
                  pagination: {
                    number: pageNumber,
                    size: pageSize,
                  },
                  pages: {
                    ...prevState.pages,
                    [pageNumber]: ids,
                  },
                };
              }
              const id = data[key];
              return {
                ...prevState,
                id,
                entities: { ...prevState.entities, [id]: data },
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: false,
                },
              };
            },
            failure: (prevState) => {
              const { errorMessage } = action.payload?.response?.data || {
                errorMessage: '서버와 연결에 실패했습니다.',
              };
              return {
                ...prevState,
                loadingState: {
                  ...prevState.loadingState,
                  [`${type}/${name}`]: false,
                },
                errorState: {
                  ...prevState.errorState,
                  [`${type}/${name}`]: errorMessage || true,
                },
              };
            },
          });
        }
        case RESET:
          return initState;
        default:
          return state;
      }
    };
    return apiReducers;
  }, {});
};
