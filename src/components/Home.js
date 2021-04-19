import React, {Fragment, useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import Formulario from './Formulario';
import ListadoNoticias from './ListadoNoticias';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

const Home = ({titulo, checkLogin}) => {

    const handleSubmit = e => {
        e.preventDefault();      
          history.push("/login")
        
    }
    const classes = useStyles();
    const history = useHistory();
    useEffect(() => {
        if(checkLogin === false){
            history.push("/login")
        }
    
    }, [checkLogin, history])

    const [categoria, guardarCategoria ] = useState('');
    const [noticias, guardarNoticias] = useState([]);
  

  useEffect(() => {
   
      const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=259a365cc01b499ba3ca37a7dec9f5b4`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);

      }
      consultarAPI();
  }, [categoria]);
    return ( 
        <>
        <form onSubmit={handleSubmit}>
        <nav className="nav-weapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{titulo}</a>
            <div className={classes.root}>
            <Button variant="contained" type="submit">Volver al login</Button>
            </div>
        </nav>
        </form>
         <Fragment>
        
         <div className="container white">
             <Formulario 
                 guardarCategoria={guardarCategoria}
             />
             <ListadoNoticias
                 noticias={noticias}
             />
         </div>
     </Fragment> 
     </>
     );
}
 
export default Home;