import { memo } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import resultNotFoundImage from './assest/image1.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notFoundBox: {
      padding: "15px 0",
      maxWidth: "350px",
      margin: "0 auto",
    },
    notFoundImage: {
      marginBottom: "47px",
      maxWidth: "100%",
      '@media(max-width: 600px)': {
        marginBottom: "20px",
      },
    },
    massageStyle: {
      fontFamily: "Montserrat",
      marginBottom: "100px",
      fontSize: "24px",
      lineHeight: "36px"
    },
  }),
);

interface PropTypes {
  resultNotFoundMessage?: string
}

const SearchResultNotFoundCard = ({ resultNotFoundMessage } : PropTypes) => {
  const classes = useStyles();

  const resultNotFoundMessageDefault = "Sorry, we couldn’t find any results for that search. Try again with a different key word."

  return (
    <Box className={classes.notFoundBox}>
      <img src={resultNotFoundImage} className={classes.notFoundImage} alt="" />
      <Typography className={classes.massageStyle}>
        <p>{resultNotFoundMessage ?? resultNotFoundMessageDefault}</p></Typography>
    </Box>
  );
}

export default memo(SearchResultNotFoundCard);