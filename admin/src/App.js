import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Admin />
    </div>
  );
}

export default App;
