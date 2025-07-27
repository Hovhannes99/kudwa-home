import { ReactNode, useMemo, Fragment } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';
import { inputsCustomizations } from './common/inputs';
import { dataDisplayCustomizations } from './common/dataDisplay';
import { feedbackCustomizations } from './common/feedback';
import { navigationCustomizations } from './common/navigation';
import { surfacesCustomizations } from './common/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';

import { 
  dataGridCustomizations,
} from './dataGrid';
// import { chartsCustomizations } from './charts';
import { datePickersCustomizations } from './datePickers';

const xThemeComponents = {
  // ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
};

interface AppThemeProps {
  children: ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme(props: AppThemeProps) {
  
 
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...xThemeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
