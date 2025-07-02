import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import LoadingSkeleton from './LoadingSkeleton';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(({ data }) => setItems(data.results))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {loading
        ? [...Array(8)].map((_, i) => <LoadingSkeleton key={i} />)
        : items.map(item => (
            <Grid xs={4} sm={4} md={4}>
              <ItemCard {...item} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ItemList;
