// pages/landing.js
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" gutterBottom>
          Welcome to Your Adventure!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Discover breathtaking destinations and plan your next journey with us.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/images/beach.jpg" // Replace with your own images
            alt="Beach"
            width={500}
            height={300}
            style={{ borderRadius: '8px' }}
          />
          <Typography variant="h6" align="center" mt={2}>
            Sunny Beaches
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Image
            src="/images/mountains.jpg" // Replace with your own images
            alt="Mountains"
            width={500}
            height={300}
            style={{ borderRadius: '8px' }}
          />
          <Typography variant="h6" align="center" mt={2}>
            Majestic Mountains
          </Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" href="/login">
          Back to Login
        </Button>
      </Box>
    </Container>
  );
}
