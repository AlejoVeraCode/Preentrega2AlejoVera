import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from "./Components/SobreNosotros/SobreNosotros";
import Eventos from "./Components/Eventos/Eventos";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
