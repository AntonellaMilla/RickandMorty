import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        backgroundImage: 'url(https://rickandmortyapi.com/api/character/avatar/1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h2">Bienvenido al Multiverso</Typography>
        <Typography variant="h5">Explora personajes de Rick & Morty</Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary" component={Link} to="/items">Ver Personajes</Button>
          <Button variant="outlined" color="secondary" component={Link} to="/contact">Contáctanos</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroBanner;
