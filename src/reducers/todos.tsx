enum ActionType {
  ADD_TOTO = "ADD_TOTO",
  DELETE_TODO = "DELETE_TOTO"
};

type Action = {
  type: ActionType;
  text: string;
}

const ADD_TOTO = ActionType.ADD_TOTO;

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_TOTO:
      return [...state, action.text];
    default:
      return state;
  }
};

export default todos;