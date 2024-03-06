import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Greetings />
      <Counter />
    </Provider>
  );
}

export default App;
