import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardComponent } from '../components';

export const ContentSite = (props: any) => {
  const [data, setData] = useState([] as any);
  const [isMarvel, setIsMarvel] = useState(true);

  const API_KEY: string = 'bf189abaaefb6da6ddfacdea4e2679ba&hash=34eb24df5bfb7ab561811a504339d769';
  const urlmarvel: string = `https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=1&apikey=${API_KEY}`;
  const urlMarvelSearch: string = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${props.inputSearch}&limit=30&ts=1&apikey=${API_KEY}`;

  const navigate = useNavigate();
  let User = localStorage.getItem('User');
  !User && navigate('/Login');

  useEffect(() => {
    try {
      isMarvel && axios.get(props.inputSearch ? urlMarvelSearch : urlmarvel).then(({ data }) => setData(data.data.results));
      !isMarvel &&
        axios.get('./heroes.json').then(({ data }) => {
          let heroes = data.results.map((hero: any) => ({
            id: hero.id,
            name: hero.name,
            date: hero.date_added,
            image: hero.image,
          }));

          let filter = heroes.filter((hero: any) => hero.name.includes(props.inputSearch));

          setData(!props.inputSearch ? heroes : filter);
        });
    } catch (error) {
      console.log(error);
    }
    return () => {};
  }, [props.inputSearch, isMarvel]);

  useEffect(() => {
    setIsMarvel(props.isMarvel);
  }, [props.isMarvel]);

  return User ? (
    <Box>
      <Typography variant='h3' sx={{ m: 1 }}>
        {isMarvel ? 'Marvel' : 'DC comics'}
      </Typography>
      <Grid container>
        {data.map((item: any) => (
          <Grid item xs={12} sm={4} xl={2} key={item.id} >
            <CardComponent data={item} isMarvel={isMarvel} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : null;
};
