export const SET_MESSAGE = "SET-MESSAGE";
export const setMessage = (messageType: string, messageText: string) => ({
  type: SET_MESSAGE,
  payload: { messageType, messageText },
});
