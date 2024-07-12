import { Toaster } from "react-hot-toast";
import "./App.css";

import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          success: {
            duration: 3000,
          },
        }}
      />
      <Routes />
    </div>
  );
}

export default App;
