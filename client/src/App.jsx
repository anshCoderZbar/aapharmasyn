import { AllRoutes } from "routes";
import { useEffect } from "react";
import "swiper/css";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return <AllRoutes />;
}

export default App;
