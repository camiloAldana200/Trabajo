import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





export default function SignIn({setCheckLogin}) {
  let history = useHistory();
  const [error, setError] = useState({
    usuario: false,
    email: false,
    password:false
  });

  const classes = useStyles();

  const localUser ={
    usuario: "camilo",
    email: "camilo@gmail.com",
    password: "123456"
  }
 

  const [datos, setDatos] = useState({
        usuario: "",
        email: "",
        password: "",
    
    })
    const [errors, setErrors] = useState(true);
    const handleChange = (e) =>{

        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
      
    }

    const {usuario, email, password} = datos;
    useEffect(() => {
      if (usuario.trim() === localUser.usuario
          && email.trim() === localUser.email
          && password.trim() === localUser.password) {
          setErrors(false)
      } else {
          setErrors(true)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datos])
  useEffect(() => {
      if (usuario.trim() === localUser.usuario) {
          setError({ ...error, usuario: false })
      } else {
          setError({ ...error, usuario: true })
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario]);
  useEffect(() => {
      if (email.trim() === localUser.email) {
          setError({ ...error, email: false })
      } else {
          setError({ ...error, email: true })
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email])
  useEffect(() => {
      if (password.trim() === localUser.password) {
          setError({ ...error, password: false })
      } else {
          setError({ ...error, password: true })
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])
  const handleSubmit = e => {
      e.preventDefault();
      
      if (!errors) {
        setCheckLogin(true);
        history.push("/")
      } else {
          alert("Nombre de usuario o correo incorrectos")
      }
  }

    
    

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          
        

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usuario"
            label="Usuario"
            name="usuario"
            autoComplete="usuario"
            autoFocus
            onChange={handleChange}
            error={error.usuario}

          />
          {error.usuario ?  <div className={classes.root}>
          <Alert severity="error">Digite un usuario valido</Alert> </div> : null}
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            error={error.email}
           
          />
          {error.email ?  <div className={classes.root}>
          <Alert severity="error">Digite un correo valido</Alert> </div> : null}
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            error={error.password}
          
          />
          {error.password ?  <div className={classes.root}>
          <Alert severity="error">Digite una contraseña valida</Alert> </div> : null}

         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Siguiente
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}