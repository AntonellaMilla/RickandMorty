import { Container, Box, Typography } from '@mui/material';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h4">Contáctanos</Typography>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default ContactPage;
