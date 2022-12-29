import { AccountCircle } from '@mui/icons-material';
import { Box, Button, Card, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const userProvider = useContext(UserContext);
  const navigate = useNavigate();
  let User = localStorage.getItem('User');

  useEffect(() => {
    User && navigate('/');
  }, []);
  
  return (
    <Box sx={{ mb: 40 }}>
      <Formik
        validateOnChange={false}
        initialValues={{
          username: '',
          email: '',
          password: '',
          id: 0,
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          localStorage.setItem('User', JSON.stringify(data));
          navigate('/');
          setSubmitting(false);
        }}>
        {({ isValid, isSubmitting, setFieldValue, values }) => (
          <Form noValidate autoComplete='on'>
            <Card sx={{ mx: { xs: 2, sm: 5, md: 50 }, mt: { xs: 10, md: 30 }, p: '2%', boxShadow: 20, width: { md: 500 } }}>
              {' '}
              <TextField
                fullWidth
                required
                name='email'
                label='Email'
                variant='standard'
                onChange={({ target }) => setFieldValue('email', target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth required variant='standard'>
                <InputLabel htmlFor='standard-adornment-password'>password</InputLabel>
                <Input name='password' type='password' value={values.password} onChange={({ target }) => setFieldValue('password', target.value)} />
              </FormControl>
              <TextField
                required
                name='username'
                label='Username'
                variant='standard'
                onChange={({ target }) => {
                  setFieldValue('username', target.value), setFieldValue('id', `1`);
                }}
              />
              <Button
                disabled={isSubmitting || !values.password || !values.email || !values.username}
                sx={{ bgcolor: '#9CC0DB', float: 'right', mt: 2, boxShadow: 20 }}
                type='submit'>
                Login
              </Button>
            </Card>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
