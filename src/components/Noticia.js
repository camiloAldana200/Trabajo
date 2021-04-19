import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
        justify: "center",
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
const cards = [1];

const Noticia = ({noticia}) => {

    const classes = useStyles();
    const {urlToImage, url, title, description}= noticia;

    const imagen = (urlToImage) ?
    <CardMedia
                    className={classes.cardMedia}
                    image={urlToImage}
                    title={title}
                     
                    />
   
    : null;
    return ( 
        <React.Fragment>
        <main>
          <Container className={classes.cardGrid} width="auto">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card} >
                    {imagen}
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {title}
                      </Typography>
                      <Typography>
                      {description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href={url}>
                        Ver Noticia
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        
      </React.Fragment>
        
     );
}
 
export default Noticia;