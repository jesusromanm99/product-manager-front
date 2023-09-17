import { ToastContainer } from "react-toastify";
import RootRoutes from "./components/RootRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <RootRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
