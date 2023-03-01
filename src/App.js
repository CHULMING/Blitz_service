import { MenuBar } from "./MenuBar";
import { About } from "./About";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  /* -> Router 먼저 구현하자!!!! 
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  */
  return (
    <div>
      <MenuBar></MenuBar>
      <About></About>
    </div>
  );
}

export default App;
