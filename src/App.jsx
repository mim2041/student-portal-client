import "./App.css";
import { RouterProvider } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import "react-photo-view/dist/react-photo-view.css";

// import Routes from "./routes";
import Loader from "./components/shared/Loader/Loader";
import BackToTop from "./components/shared/BackToTop/BackToTop";
import Routes from "./routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate data loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="">
            {/* <RouterProvider router={router}></RouterProvider> */}
            <Routes />
            <BackToTop></BackToTop>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
