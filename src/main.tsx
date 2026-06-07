import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

const App = lazy( () => import( './App.tsx' ) );
const ProjetoItaloMonitor = lazy( () => import( './pages/ProjetoItaloMonitor.tsx' ) );
const ProjetoFoxmake = lazy( () => import( './pages/ProjetoFoxmake.tsx' ) );
const ProjetoXCLIN = lazy( () => import( './pages/ProjetoXCLIN.tsx' ) );
const ProjetoSiserp2021 = lazy( () => import( './pages/ProjetoSiserp2021.tsx' ) );
const ProjetoSOM = lazy( () => import( './pages/ProjetoSOM.tsx' ) );
const ProjetoIPlot = lazy( () => import( './pages/ProjetoIPlot.tsx' ) );

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projeto/italomonitor' element={<ProjetoItaloMonitor />} />
        <Route path='/projeto/foxmake' element={<ProjetoFoxmake />} />
        <Route path='/projeto/xclin' element={<ProjetoXCLIN />} />
        <Route path='/projeto/siserp-2021' element={<ProjetoSiserp2021 />} />
        <Route path='/projeto/projeto-som' element={<ProjetoSOM />} />
        <Route path='/projeto/iplot' element={<ProjetoIPlot />} />
    </Routes>
  </HashRouter>
)
