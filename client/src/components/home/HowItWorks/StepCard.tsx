import { Card, CardContent, Typography, Box } from '@mui/material';

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#2563EB,#7C3AED)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            mb: 3,
          }}
        >
          {step}
        </Box>

        <Typography variant='h6' sx={{ fontWeight: 700 }} gutterBottom>
          {title}
        </Typography>

        <Typography color='text.secondary'>{description}</Typography>
      </CardContent>
    </Card>
  );
}
