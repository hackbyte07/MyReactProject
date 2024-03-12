import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store/store";
import RouterPage from "./router_page/RouterPage";

function App() {
  return (
    <Provider store={store}>
      <RouterPage />
    </Provider>
  );
}

export default App;
