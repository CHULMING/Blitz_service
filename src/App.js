import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/MenuBar";
import { About } from "./pages/About";
import { Whattodo } from "./pages/Whattodo";
import { Inquiry } from "./pages/Inquiry";
import NotFound from "./pages/NotFound";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MenuBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/whattodo" element={<Whattodo />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
