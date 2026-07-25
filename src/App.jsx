import { Routes, Route } from 'react-router';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home/Home';
import WeatherPage from './pages/Weather/WeatherPage';
import PedidosPage from './pages/Pedidos/PedidosPage';
import LizImoveisPage from './pages/LizImoveis/LizImoveisPage';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clima" element={<WeatherPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/liz-imoveis" element={<LizImoveisPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
