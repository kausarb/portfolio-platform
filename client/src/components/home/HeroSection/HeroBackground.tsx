import { Box } from '@mui/material';

export default function HeroBackground() {
  return (
    <>
      {/* Top Left Blur */}
      <Box
        sx={{
          position: 'absolute',
          top: -150,
          left: -150,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Right Blur */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -180,
          right: -180,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
