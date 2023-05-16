import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

  import Index from "../Pages/index";

  const routes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default routes;
  