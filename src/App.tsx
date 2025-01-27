import { BrowserRouter } from "react-router-dom";
import Provider from "./provider";
import AppRoutes from "./router/AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <Toaster />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
