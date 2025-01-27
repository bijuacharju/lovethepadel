import { BrowserRouter } from "react-router-dom";
import Provider from "./provider";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
