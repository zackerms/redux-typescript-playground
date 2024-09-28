import {RootState, useAppDispatch} from "@/redux/redux";
import {useSelector} from "react-redux";
import {addExpValue, decrement, increment} from "@/redux/counter";

export default function Home() {
    const dispatch = useAppDispatch();
    const {counterValue} = useSelector((state: RootState) => state.counter);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleAddLargeValue = () => {
        dispatch(addExpValue({exponential: 10}));
    }

    return (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                <div>{counterValue}</div>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddLargeValue}>
                Add Large Value
            </button>
        </div>
    );
}
