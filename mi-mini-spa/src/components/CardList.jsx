import { Grid, Box, Typography, Button } from '@mui/material';

const cards = [
  { id: 1, title: 'Dimensión C-137', description: 'La dimensión original de Rick.', image: 'https://via.placeholder.com/300x200' },
  { id: 2, title: 'Morty Malvado', description: '¿Aliado o enemigo?', image: 'https://via.placeholder.com/300x200' },
  { id: 3, title: 'Portal Gun', description: 'La herramienta interdimensional.', image: 'https://via.placeholder.com/300x200' },
  { id: 4, title: 'Mr. Meeseeks', description: '¡Estoy aquí para ayudar!', image: 'https://via.placeholder.com/300x200' },
  { id: 5, title: 'Pickle Rick', description: 'La evolución vegetal de Rick.', image: 'https://via.placeholder.com/300x200' },
  { id: 6, title: 'Citadel of Ricks', description: 'Miles de Ricks y Mortys.', image: 'https://via.placeholder.com/300x200' },
];

const CardList = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Tarjetas Destacadas
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card) => (
          <Grid xs={4} sm={4} md={4}>
            <Box
              sx={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <Box p={2}>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
                <Button size="small" sx={{ mt: 1 }} disabled>
                  Ver más
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardList;
