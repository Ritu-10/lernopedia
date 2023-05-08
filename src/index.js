import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Routing from './Routing';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <RecoilRoot>
  <BrowserRouter>
  <Routing/>
  </BrowserRouter>
  </RecoilRoot>
  {/* <Login/> */}
  {/* <Registration/> */}
  </StrictMode>
);
