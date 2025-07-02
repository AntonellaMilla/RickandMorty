import { TextField, Box } from '@mui/material';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const ItemSearch = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 300);

  // Puedes pasar onSearch o usar contexto/estado global
  if (onSearch) onSearch(debouncedValue);

  return (
    <Box my={3}>
      <TextField
        label="Buscar personaje"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Box>
  );
};

export default ItemSearch;
