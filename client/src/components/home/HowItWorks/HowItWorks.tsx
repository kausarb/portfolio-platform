import { Box, Container, Typography, Grid } from '@mui/material';
import StepCard from './StepCard';
import { howItWorksSteps } from '@/src/mocks/howItWorks';

export default function HowItWorks() {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' sx={{ align: 'center', fontWeight: 800, mb: 2 }}>
          How It Works
        </Typography>

        <Typography
          align='center'
          color='text.secondary'
          sx={{
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          From creating your profile to sharing your portfolio, PortfolioHub makes the process
          simple and effortless.
        </Typography>

        <Grid container spacing={4}>
          {howItWorksSteps.map((step) => (
            <Grid key={step.step} size={{ xs: 12, sm: 6, md: 3 }}>
              <StepCard {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
