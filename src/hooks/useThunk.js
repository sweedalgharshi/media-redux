import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoadings] = useState(false);
  const [error, setError] = useState(null);

  const runThunk = useCallback(
    (arg) => {
      setIsLoadings(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => setError(error))
        .finally(() => setIsLoadings(false));
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
}
