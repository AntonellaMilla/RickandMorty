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
    <Grid container spacing={3}>
      {loading
        ? [...Array(8)].map((_, i) => <LoadingSkeleton key={i} />)
        : items.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ItemCard {...item} />
            </Grid>
          ))}
    </Grid>
  );
};

export default ItemList;
