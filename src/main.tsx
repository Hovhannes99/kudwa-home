import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/index'

import 'highcharts/modules/exporting';
import 'highcharts/modules/export-data';
import 'highcharts/modules/full-screen';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
