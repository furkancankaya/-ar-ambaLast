import React from "react";
import { Container } from "reactstrap";
import Header from "../navi/Header";
import Dashboard from "./Dashboard";
import BuyPage from "./BuyPage";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/Detail";

import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardUi from "./CreditCardUi";

function App() {
  //<Route path="/buy" element={<BuyPage />} />
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
        
        
        <Route path="/buy" element={<CreditCardUi />} />
          
        

        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </Container>
  );
}


export default App;
