import t from 'src/redux/actionTypes';

const defaultState = {
  count: 0,
};

const count = (state = defaultState, action: any) => {
  switch (action.type) {
    case t.INCREMENT_COUNT:
      return Object.assign({}, state, {
        count: (state.count + 1),
      });

    default:
      return state;
  }
};

export default count;
