export const actionTypes = {
  UPDATE_TEXT: "UPDATE_TEXT"
};

export function updateTextAction(text) {
  return {
    type: actionTypes.UPDATE_TEXT,
    text
  }
}