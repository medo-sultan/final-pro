import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./Routes/Routrs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BackToTop from "./Components/BackToTop/BackToTop";
// import FloatingCartButton from "./Components/Floating/FloatingCartButton";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BackToTop threshold={300} smooth />
      {/* <FloatingCartButton /> */}
    </>
  );
}

export default App;
