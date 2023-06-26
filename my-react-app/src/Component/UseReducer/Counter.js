import { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
        //...state is object spreading to store to merge the previous value with new one
      return { ...state,counter1: state.counter1 + action.value }; 
    case "decrement":
      return { ...state,counter1: state.counter1 - action.value };
    case "increment-2":
      return { ...state,counter2: state.counter2 + action.value };
    case "decrement-2":
      return { ...state,counter2: state.counter2 - action.value };
    default:
      return { counter: state.counter1 };
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <div>
        <div> Count1-{count.counter}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment by 1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 5 })}
        >
          Increment by 5
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement by 1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          Decrement by 5
        </button>
      </div> */}

      <div>
      <div> Count1-{count.counter1}</div> <br/>
      <div> Count2-{count.counter2}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment by 1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment-2", value: 5 })}
        >
          Increment by 5
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement by 1
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement-2", value: 5 })}
        >
          Decrement by 5
        </button>
      </div>
    </>
  );
}
