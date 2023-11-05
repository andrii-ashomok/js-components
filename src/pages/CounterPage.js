import Button from "../components/Button";
import {useReducer} from "react";
import Panel from "../components/Panel";
import {produce} from "immer";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const CHANGE = 'change';
const ADD = 'add';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + action.payload
            return;
        case DECREMENT:
            state.count = state.count - action.payload;
            return;
        case CHANGE:
            state.valueToAdd= action.payload;
            return;
        case ADD:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return state;
    }

};

function CounterPage({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });

    const increment = () => {
       dispatch({
           type: INCREMENT,
           payload: 1
       });
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT,
            payload: 1
        });
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        dispatch({
            type: CHANGE,
            payload: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD
        });
    };

    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot</label>
            <input type="number" className="p-1 m-3 bg-gray-50 border border-green-300"
                value={state.valueToAdd || ""}
                onChange={handleChange}
            />
            <Button>Add it</Button>
        </form>
    </Panel>
}

export default CounterPage;