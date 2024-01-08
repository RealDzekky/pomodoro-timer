import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Timer from "./components/Timer";

export default function App(){
  return(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="timer" element={<Timer />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);