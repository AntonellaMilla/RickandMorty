import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mini SPA Rick&Morty
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/items">Ítems</Button>
        <Button color="inherit" component={Link} to="/contact">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
