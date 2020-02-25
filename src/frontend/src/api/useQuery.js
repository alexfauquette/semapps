import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initialValues = { data: null, loading: true, error: null };

const useQuery = (uri, options = { cacheOnly: false }) => {
  console.warn('---------- useQuery', uri);
  const dispatch = useDispatch();
  const cachedQuery = useSelector(state => state.api.queries[uri]);

  const callFetch = useCallback(() => {
    console.warn('--------------- callFetch', uri);
    let { cacheOnly, headers, ...fetchOptions } = options;
    if (!cachedQuery) {
      dispatch({ type: 'QUERY_TRIGGER', uri });
      headers = {
        Accept: 'application/ld+json',
        ...headers
      };
      const token = localStorage.getItem('token');
      if (token) headers.Authorization = `Bearer ${token}`;
      fetch(uri, {
        method: 'GET',
        headers,
        ...fetchOptions
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.status, response.statusText);
          }
        })
        .then(data => {
          dispatch({ type: 'QUERY_SUCCESS', uri, data });
        })
        .catch(error => {
          dispatch({ type: 'QUERY_FAILURE', uri, error: error.message });
        });
    }
  }, [uri, options, dispatch, cachedQuery]);

  useEffect(() => {
    if (options.cacheOnly !== true) callFetch();
  }, [options, callFetch]);

  return { ...initialValues, ...cachedQuery, retry: callFetch };
};

export default useQuery;
