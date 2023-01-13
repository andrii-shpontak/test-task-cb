import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage';
import DescriptionPage from './pages/descriptionPage/DescriptionPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:id' element={<DescriptionPage />} />
      <Route path='/*' element={<MainPage />} />
    </Routes>
  );
}

export default App;
