import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { notify } from '../utils/notifyFavorite';


const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Nombre requerido';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Correo inválido';
    if (!form.message) errs.message = 'Mensaje requerido';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      notify("Formulario enviado con éxito!");
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <Box component="form" mt={3} onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Correo"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Mensaje"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        error={!!errors.message}
        helperText={errors.message}
      />
      <Button type="submit" variant="contained" color="primary">Enviar</Button>
    </Box>
  );
};

export default ContactForm;
