/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAG = createActionName('ADD_TAGS');
export const DELETE_TAG = createActionName('DELETE_TAGS');
export const CHANGING_DURATION = createActionName('CHANGING_DURATION');

// action creators
export const addTags = payload => ({ payload, type: ADD_TAG });
export const deleteTags = payload => ({ payload, type: DELETE_TAG });
export const changeDuration = payload => ({ payload, type: CHANGING_DURATION });
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };

      // TODO - handle other action types
    case ADD_TAG:
      return{
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload,
        ],
      };

    case DELETE_TAG:
      return{
        ...statePart,
        tags: '',
      };

    case CHANGING_DURATION:
      return{
        ...statePart,
        duration: action.payload,
      };

    default:
      return statePart;
  }
}
