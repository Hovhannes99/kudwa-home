import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const mainListItems = [
  { to: "/dashboard", text: 'Dashboard', icon: <HomeRoundedIcon /> },
  { to: "/reports", text: 'Reports', icon: <AnalyticsRoundedIcon /> },
];

function MenuContent() {
  const {pathname} = useLocation()
    
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <Link key={index} to={item.to} style={{ color: 'black', textDecoration: 'none' }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={item.to === pathname}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
}

export default MenuContent