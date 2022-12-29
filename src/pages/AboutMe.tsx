import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../assets/profile.png';

export const AboutMe = () => {
  const navigate = useNavigate();
  let User = localStorage.getItem('User');

  useEffect(() => {
    !User && navigate('/Login');
  }, [])
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <img src={Profile} alt='perfil' width={800} />
    </Box>
  );
};
