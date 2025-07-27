// export { chartsCustomizations } from './charts';
export { dataGridCustomizations } from './dataGrid';
export { datePickersCustomizations } from './datePickers';
export { treeViewCustomizations } from './treeView';


export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  // Add other theme properties as needed, e.g., spacing, typography
}

// Function to create and return the theme object
export function createTemplateTheme(): AppTheme {
  return {
    colors: {
      primary: '#1976d2', // Example blue
      secondary: '#dc004e', // Example red
      background: '#f4f6f8',
      text: '#212121',
    },
    // You could add more complex logic here for dark/light mode etc.
  };
}
