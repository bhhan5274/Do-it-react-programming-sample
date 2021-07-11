import { FETCH_LIST, CREATE, DELETE, FETCH, RESET, UPDATE } from './actionTypes';
import Api from '../Api';

const createActions = (resourceName: string, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: Api.get(resourceName, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
      type: FETCH_LIST,
    },
  }),
  member: (id: string, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
      type: FETCH,
    },
  }),
  create: (data = {}, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
      type: CREATE,
    },
  }),
  update: (id: string, data = {}, params = {}, meta = {}) => ({
    type: UPDATE,
    promise: Api.put(`${resourceName}/${id}`, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
      type: UPDATE,
    },
  }),
  destroy: (id: string, params = {}, meta = {}) => ({
    type: DELETE,
    promise: Api.delete(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
      type: DELETE,
    },
    payload: { id },
  }),
  reset: () => ({
    type: RESET,
    meta: { resourceName, type: RESET },
  }),
});

export default createActions;
