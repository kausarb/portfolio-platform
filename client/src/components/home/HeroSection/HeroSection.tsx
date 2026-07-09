import { Box, Container } from '@mui/material';
import HeroContent from './HeroContent';
import HeroPreview from './HeroPreview';
import { heroPreviewData } from '@/src/mocks/heroPreview';
import HeroBackground from './HeroBackground';

export default function HeroSection() {
  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF4FF 50%, #FFFFFF 100%)',
      }}
    >
      <HeroBackground />
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: {
              xs: 6,
              md: 10,
            },
            py: {
              xs: 6,
              md: 0,
            },
            alignItems: 'center',
          }}
        >
          <Box>
            <HeroContent />
          </Box>
          <Box>
            <HeroPreview data={heroPreviewData} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
