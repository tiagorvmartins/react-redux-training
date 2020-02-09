import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
import { API_ERRORED } from "../constants/action-types";
import { DELETE_NOTIFICATION } from "../constants/action-types";
import { RESET_ERROR_MESSAGE } from "../constants/action-types";
import { RESET_INFORMATION_MESSAGE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  error: false,
  errorMessage: '',
  information: false,
  informationMessage : '',
  notifications: [],
  notificationId: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    
    
    action.payload.id = state.articles.length;
    const notification = { id: state.notificationId, type:"info", strong:"Information: ",
       text: `Article with text '${action.payload.data}' added to the list.`};



    return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
        notifications: state.notifications.concat([notification]),
        notificationId: state.notificationId + 1

    });
  }

  if (action.type === DATA_LOADED) {

    const notification = { id: state.notificationId, type:"info", strong:"Information: ",
    text: `A total of ${action.payload.data.length} remote articles have been loaded.`};

    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload.data),      
      notifications: state.notifications.concat([notification]),
      notificationId: state.notificationId + 1
    });
  }
  

  if (action.type === API_ERRORED) {

    const notification = { id: state.notificationId, type:"error", strong:"Error: ",
    text: action.payload};

    return Object.assign({}, state, {
      notifications: state.notifications.concat([notification]),
      notificationId: state.notificationId + 1
    })
  }

  if (action.type === RESET_ERROR_MESSAGE) {
    return Object.assign({}, state, {
        error: false,
        errorMessage: ''
    })
  }

  if (action.type === RESET_INFORMATION_MESSAGE) {
    return Object.assign({}, state, {
        information: false,
        informationMessage: ''
    })
  }

  if (action.type === DELETE_NOTIFICATION) {
    
    return Object.assign({}, state, {
        notifications: state.notifications.filter(notify => notify.id !== action.payload)
    })
  }



  return state;
}

export default rootReducer;