import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { MDBBtn, MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      className='text-center text-white'
      sx={{ backgroundColor: '#9c27b0', width: '100%', flex:1}}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn rippleColor='dark' color='white' size='lg' className='text-dark m-1' href='https://www.linkedin.com/in/charry07/' role='button'>
            <LinkedInIcon />
            Linkedin
          </MDBBtn>

          <MDBBtn rippleColor='dark' color='white' size='lg' className='text-dark m-1' href='https://github.com/charry07/' role='button'>
            <GitHubIcon />
            Github
          </MDBBtn>

          <MDBBtn rippleColor='dark' color='white' size='lg' className='text-dark m-1' href='/AboutMe' role='button'>
            <InfoIcon />
            About Me
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright -{'>'}
        <a className='text-dark' href='mailto:charry072013@gmail.com'>
          {' '}
          charry072013@gmail.com
        </a>
      </div>
    </Box>
  );
};
