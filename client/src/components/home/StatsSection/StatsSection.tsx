import { Box, Container, Grid, Typography } from '@mui/material';
import { stats } from '@/src/mocks/stats';

export default function StatsSection() {
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(90deg,#2563EB,#7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography color='text.secondary' sx={{ mt: 1 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
