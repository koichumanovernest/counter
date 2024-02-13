import { useReducer } from "react";
const initialState = {
	count: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "icrement":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "onsaninMinus":
			return{count: state.count -10}
		case "onsaninPilus":
			return{count: state.count +10}
		case "onsaniNol":
			return{count: state.count *0}

			default:
				throw new Error("kata chikti maga")

	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	function icrementHnandler() {
		dispatch({ type: "icrement" });
	}
	function decrementHandler() {
		dispatch({ type: "decrement" });
	}
	function onsaninMinus() {
		dispatch({ type: "onsaninMinus" });
	}
	function onsaninPilus() {
		dispatch({ type: "onsaninPilus" });
	}
	function onsaniNol() {
		dispatch({ type: "onsaniNol" });
	}
	return (
		<div>
			<h5>Counter using useReduce</h5>
			<h1>{state.count}</h1>
			<button onClick={onsaninPilus}>onsaninPilus</button>
			<button onClick={icrementHnandler}>icrement</button>
			<button onClick={onsaniNol}>onsaniNol</button>
			<button onClick={decrementHandler}>decrement</button>
			<button onClick={onsaninMinus}>onsaninMinus</button>
		</div>
	);
};
export default Counter;
