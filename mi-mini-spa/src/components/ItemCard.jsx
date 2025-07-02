import { Box, Typography, IconButton, Card, CardMedia, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';
import { notify } from '../utils/notifyFavorite';

const ItemCard = ({ id, name, image, species }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("fav-items")) || [];
    setFav(stored.some(item => item.id === id));
  }, [id]);

  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem("fav-items")) || [];
    if (fav) {
      favs = favs.filter(item => item.id !== id);
      notify("Eliminado de favoritos");
    } else {
      favs.push({ id, name, image, species });
      notify("Agregado a favoritos");
    }
    localStorage.setItem("fav-items", JSON.stringify(favs));
    setFav(!fav);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">{name}</Typography>
          <IconButton onClick={toggleFav} color={fav ? 'warning' : 'default'}>
            <StarIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Especie: {species}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
