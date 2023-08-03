import React from "react";
import Facilities from "./Facilities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Availability from "./Availability";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Facilities />,
  },
  {
    path: "facility/:facilityName",
    element: <Availability />,
  },
]);

function App() {
  return (
    <div className="App">
      <h1 className="header">FACILITY BOOKING MODULE</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
