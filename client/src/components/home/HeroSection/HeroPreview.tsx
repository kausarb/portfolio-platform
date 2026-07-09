import { HeroPreviewData } from '@/src/types/hero';
import { Avatar, Box, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';

type HeroReviewProps = {
  data: HeroPreviewData;
};

export default function HeroPreview({ data }: HeroReviewProps) {
  return (
    <Card
      elevation={10}
      sx={{
        borderRadius: 5,
        overflow: 'hidden',
        maxWidth: 520,
        mx: 'auto',
      }}
    >
      {/* Browser Header */}

      <Box
        sx={{
          px: 2,
          py: 1.5,
          bgcolor: '#F3F4F6',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Stack direction='row' spacing={1}>
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: '#FF5F57',
            }}
          />

          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: '#FEBC2E',
            }}
          />

          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: '#28C840',
            }}
          />
        </Stack>

        <Box
          sx={{
            ml: 3,
            px: 2,
            py: 0.5,
            bgcolor: 'white',
            borderRadius: 2,
            flexGrow: 1,
            fontSize: 13,
            color: 'text.secondary',
          }}
        >
          portfoliohub.dev/kausar
        </Box>
      </Box>

      <CardContent sx={{ p: 4 }}>
        <Stack spacing={3}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: 'primary.main',
              fontSize: 28,
            }}
          >
            K
          </Avatar>

          <Box>
            <Typography variant='h5' sx={{ fontWeight: 700 }}>
              {data?.name}
            </Typography>

            <Typography color='text.secondary'>{data?.title}</Typography>
          </Box>

          <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {data?.skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>

          <Divider />

          <Box>
            <Typography sx={{ fontWeight: 700 }} gutterBottom>
              Featured Project
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              {data?.project?.title} – {data?.project?.description}
            </Typography>
          </Box>

          <Divider />

          <Typography variant='body2' color='text.secondary'>
            Experience • Projects • Skills • Contact
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
