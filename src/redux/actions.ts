import t from 'src/redux/actionTypes';

/**
 * Increment count in store
 */
export function incrementCount() {
  return (dispatch : any) => {
    dispatch({
      type: t.INCREMENT_COUNT,
    });
  };
}
