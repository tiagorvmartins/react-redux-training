import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_REQUESTED } from "../constants/action-types";
import { RESET_ERROR_MESSAGE } from "../constants/action-types";
import { RESET_INFORMATION_MESSAGE } from "../constants/action-types";
import { DELETE_NOTIFICATION } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
}

export function getDataSaga() {
    return { type: DATA_REQUESTED };
}

export function deleteNotification(payload){
  return { type: DELETE_NOTIFICATION, payload }
}

export function resetErrorMessage() {
    return { type: RESET_ERROR_MESSAGE }
}

export function resetInformationMessage() {
  return { type: RESET_INFORMATION_MESSAGE }
}