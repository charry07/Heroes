import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

export interface movieInterface {
  imageURL: string;
  title: string;
  rating: number;
  date: string;
}

export const CardComponent = ({ data, isMarvel }: any) => {
  return (
    <Box sx={{ m: 5 }}>
      <Card sx={{ minWidth: 180, borderRadius: 3 }}>
        <CardMedia component='img' image={isMarvel ? `${data?.thumbnail?.path}/portrait_uncanny.jpg` : data?.image?.original_url} alt={data?.name} />
      </Card>
      <Box sx={{ ml: 2, mt: 0.2 }}>
        <Typography variant='h6'>{data?.name}</Typography>
        <Typography variant='body2' color='GrayText'>
          {isMarvel ? data?.modified : data?.date}
        </Typography>
      </Box>
    </Box>
  );
};
