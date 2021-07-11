import { CREATE, UPDATE, FETCH_LIST, FETCH } from '../actions/actionTypes';

export default (resourceName: string) => {
  const resourceSelector = (state: { [x: string]: any }) => state[resourceName];
  const entitiesSelector = (state: { [x: string]: any }) => resourceSelector(state).entities;
  const pagesSelector = (state: { [x: string]: any }) => resourceSelector(state).pages;
  const idSelector = (state: { [x: string]: any }) => resourceSelector(state).id;

  const entitySelector = (state: { [x: string]: any }) => {
    const entities = entitiesSelector(state);
    return entities[idSelector(state)];
  };

  const collectionSelector = (state: { [x: string]: any }) => {
    const { ids, entities } = resourceSelector(state);
    return ids.map((id: string | number) => entities[id]);
  };

  const loadingStateSelector = (state: { [x: string]: any }) => resourceSelector(state).loadingState;
  const errorStateSelector = (state: { [x: string]: any }) => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = (state: { [x: string]: any }) =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = (state: { [x: string]: any }) =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelector = (state: { [x: string]: any }) =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelector = (state: { [x: string]: any }) =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];

  const collectionErrorStateSelector = (state: { [x: string]: any }) =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelector = (state: { [x: string]: any }) =>
    errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelector = (state: { [x: string]: any }) =>
    errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelector = (state: { [x: string]: any }) =>
    errorStateSelector(state)[`${FETCH}/${resourceName}`];

  const paginationSelector = (state: { [x: string]: any }) => {
    const { pagination } = resourceSelector(state);
    return {
      number: pagination.number || 0,
      size: pagination.size,
    };
  };

  return {
    resourceSelector,
    entitySelector,
    entitiesSelector,
    pagesSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    collectionErrorStateSelector,
    createLoadingStateSelector,
    createErrorStateSelector,
    updateLoadingStateSelector,
    updateErrorStateSelector,
    memberLoadingStateSelector,
    memberErrorStateSelector,
    paginationSelector,
  };
};
