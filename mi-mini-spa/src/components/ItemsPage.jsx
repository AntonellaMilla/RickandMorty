import { Box, Container, Typography } from '@mui/material';
import ItemSearch from './ItemSearch';
import ItemList from './ItemList';

const ItemsPage = () => {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Explora Personajes
        </Typography>
        <ItemSearch />
        <ItemList />
      </Box>
    </Container>
  );
};

export default ItemsPage;
