import React from "react";
import City from "./City";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <City defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}
