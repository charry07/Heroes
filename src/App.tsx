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
  const [inputSearch, setInputSearch] = useState('');
  const [isMarvel, setIsMarvel] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname == '/' && navigate('/marvel');
    location.pathname !== '/dc' ? setIsMarvel(true) : setIsMarvel(false);
  }, []);

  return (
    <>
      <UserContext.Provider value={user}>
        <AppBarMenu isMarvel={(e: any) => setIsMarvel(e)} inputSearch={(e: string) => setInputSearch(e)} />
        <Routes>
          <Route path='/' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
          <Route path='/marvel' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
          <Route path='/dc' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
          <Route path='/Series-Peliculas' element={<ContentSite inputSearch={inputSearch} isMarvel={isMarvel} />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Page404' element={<Page404 />} />
          {/* 404 No se Encontro la pagina */}
          {/* <Route path='/*' element={<Navigate to='/Page404' />} /> */}
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
