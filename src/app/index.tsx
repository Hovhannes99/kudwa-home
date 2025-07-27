import { BrowserRouter} from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppRoutes from "./routing";
import { StoreProvider } from "./providers/StoreProvider";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <AppTheme>
          <CssBaseline enableColorScheme />
          <AppRoutes />
        </AppTheme>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
