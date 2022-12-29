import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  let User = String(localStorage.getItem('User'));
  !User && navigate('/Login');

  const userJSon = JSON.parse(User);

  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      Hola <h3>{userJSon.username} </h3> gracias por probar la app!
    </span>
  );
};
