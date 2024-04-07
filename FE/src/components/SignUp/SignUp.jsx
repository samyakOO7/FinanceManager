import React from 'react';
import withFadeInTransition from '../FadeInText/WithFadeInTransition';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './SignUp.scss'; // Assuming you have your custom styles for SignUp
import { API } from '../constant';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [success, setSuccess] = React.useState(null); 
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handlePostRequest = async (payload) => {
    setLoading(true);
    try {
      // Your POST request handling code...
    } catch (error) {
      console.error('Error during POST request:', error);
      setSuccess(false);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if(success)
      navigate("../");
  }, [navigate, success])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const userName = data.get('username');

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.");
      return;
    }

    const payload = {
      username: email,
      password: password,
      userName: userName
    }
    handlePostRequest(payload);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="signin-container">
        <div className="image-container">
          {/* Adjust the path to your image accordingly */}
          <img style={{ width: '55vw', height: '100vh' }}  src={require('../../images/slide.jpg')} />
        </div>
        <div className="form-container">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100%',
            }}
          >
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  marginTop: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  
                  {error && (
                    <Typography variant="body2" color="error">
                      {error}
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign up
                  </Button>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        href="#"
                        style={{ backgroundColor: '#DB4437', color: 'white' }}
                      >
                        <img src={require('../../images/google.png')} alt="Google" style={{ marginRight: '8px', width: '20px', height: '20px' }} />
                        Sign up with Google
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        href="#"
                        style={{ backgroundColor: 'grey', color: 'white' }}
                      >
                        <img src={require('../../images/github.png')} alt="GitHub" style={{ marginRight: '8px', width: '20px', height: '20px'}} />
                        Sign up with GitHub
                      </Button>
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Already have an account? Sign In"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Box>
        </div>
      </div>
    </>
  );
}

export default withFadeInTransition(SignUp);
