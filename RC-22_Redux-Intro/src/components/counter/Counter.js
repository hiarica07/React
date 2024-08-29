import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { arttir, azalt, sifirla } from "../../redux/reducers/counterReducer";

const Counter = () => {
  const { sayac, text1 } = useSelector((state) => state.counterReducer);

  const dispatch1=useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter with Redux</h2>
      <h1>{sayac}</h1>
      <h2>{text1}</h2>
      <div>
        <button onClick={()=>dispatch1(arttir())} className="counter-button positive">ARTTIR</button>
        <button  onClick={()=>dispatch1(sifirla())}  className="counter-button zero">RESET</button>
        <button  onClick={()=>dispatch1(azalt())}  className="counter-button negative">AZALT</button>
      </div>
    </div>
  );
}

export default Counter;
