import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './component/menu/menu';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
