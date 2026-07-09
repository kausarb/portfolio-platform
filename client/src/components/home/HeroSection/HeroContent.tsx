import { Box, Button, Chip, Stack, Typography } from '@mui/material';

export default function HeroContent() {
  const features = ['⚡ Fast Setup', '🎨 Modern Design', '📱 Mobile Ready', '🚀 SEO Optimized'];

  return (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Chip
        label='Build your online presence effortlessly'
        color='primary'
        variant='outlined'
        sx={{
          mb: 3,
          fontWeight: 600,
        }}
      />

      <Typography
        variant='h1'
        sx={{
          fontWeight: 800,
          fontSize: {
            xs: '2.8rem',
            md: '4.5rem',
          },
          lineHeight: 1.05,
          mb: 3,
        }}
      >
        Create a Portfolio
        <br />
        That Gets You
        <br />
        <Box
          component='span'
          sx={{
            background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          Noticed.
        </Box>
      </Typography>

      <Typography
        variant='h6'
        color='text.secondary'
        sx={{ mb: 5, maxWidth: 600, lineHeight: 1.8, fontWeight: 400 }}
      >
        Design a beautiful portfolio website by simply entering your details. Showcase your
        projects, skills and achievements with a modern, responsive portfolio ready to impress
        recruiters.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
        <Button
          sx={{
            width: {
              xs: '100%',
              sm: 'auto',
            },
          }}
          variant='contained'
          size='large'
        >
          Get Started Free
        </Button>
        <Button
          sx={{
            width: {
              xs: '100%',
              sm: 'auto',
            },
          }}
          variant='outlined'
          size='large'
        >
          View Demo
        </Button>
      </Stack>

      <Stack direction='row' spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {features.map((feature) => (
          <Chip key={feature} label={feature} variant='outlined' />
        ))}
      </Stack>
    </Box>
  );
}
