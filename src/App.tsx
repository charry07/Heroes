import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppBarMenu, Footer } from './components';
import { UserContext } from './context/UserContext';
import { AboutMe, ContentSite, Login, Page404, Profile } from './pages';

function App() {
  const user = {
    id: 1,
    username: 'cambio',
    email: 'cambio@gmail.com',
    password: 'cambio',
  };

  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState('');
  const [isMarvel, setIsMarvel] = useState(true);
  let User = localStorage.getItem('User');

  useEffect(() => {
    !User && navigate('/Login');
    location.pathname == '/' && navigate('/Marvel');
    location.pathname == '/Heroes' && navigate('/Marvel');
    location.pathname !== '/DC' ? setIsMarvel(true) : setIsMarvel(false);
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <AppBarMenu isMarvel={(e: any) => setIsMarvel(e)} inputSearch={(e: string) => setInputSearch(e)} />
        <Box sx={{ position: 'relative', minHeight: '80vh', flexDirection: 'column', display: 'flex' }}>
          <Routes>
            <Route path='/' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
            <Route path='/Marvel' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
            <Route path='/DC' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
            <Route path='/Series-Peliculas' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Page404' element={<Page404 />} />
            {/* 404 No se Encontro la pagina */}
            {/* <Route path='/*' element={<Navigate to='/Page404' />} /> */}
          </Routes>
        </Box>

        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
