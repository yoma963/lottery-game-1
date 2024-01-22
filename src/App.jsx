import Pages from "./Pages/Pages";
import "./index.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <Pages />
      <ToastContainer />
    </div>
  );
}

export default App;
