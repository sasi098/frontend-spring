import { useState } from "react";
import React from "react";
import Try1 from "./COMPONENTS/Try1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Try1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
