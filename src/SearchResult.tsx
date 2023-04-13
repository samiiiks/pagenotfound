import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import resultNotFoundImage from './assest/image1.jpg'
import SearchResultHeading from './PageHeadingFullSection';
import { Box, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import SearchResultNotFoundCard from './SearchResultNotFoundCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      radius: "16px",
      backgroundColor: "#F1F1F5",
      borderRadius: "16px",
      margin: 'auto',
      width: 500,
      '@media(max-width: 600px)': {
        width: '100%'
      },
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      radius: "16px",

    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    gridStyle: {
      display: "flex",
      marginTop: "23px",
      justifyContent: "space-between",
      '@media(max-width: 600px)': {
        display: 'grid',
        height: '110px',
        justifyContent: "stretch",
      }
    },

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
    },

    formControl: {
      margin: theme.spacing(1),

      minWidth: 120,
      width: "200px"

    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    inputlebel: {
      fontFamily: "lato",
      fontSize: "15px",
    },
    select: {
      border: "none",
      padding: "10px 10px",
      borderRadius: "5px",
      height: "38px",
      width: "200px",
      background: "#F3F3F3"

    },
    inputSpan: {
      fontSize: "12px",
    },
    optionStyle: {
      margin: "10px",
      fontSize: "15px"
    },
    gridMessage: {
      maxWidth: "1003px"
    },

    FormStyle: {
      '@media(max-width: 900px)': {
        '& .MuiPaper-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded ': {
          width: '100%',
          marginLeft: '27px',
        }
      }

    }
  }),
);

export default function CustomizedInputBase() {
  const classes = useStyles();

  const tag = 'Insights & Trends'
  const heading = 'The benefits of green energy go beyond environmental impact.'
  const description = 'Find all industry insights, trends, events, and other news to stay ahead to get carbonzeroed.'

  return (
    <>
      <Container style={{ marginTop: "39px" }}>
        <SearchResultHeading
          tag={tag}
          heading={heading}
          description={description}
        />
        {/*
        <Grid className={classes.gridStyle}>
          <Box className={classes.FormStyle}>
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="Searching"
                inputProps={{ 'aria-label': 'Searching' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box>
            <select className={classes.select} name="language" placeholder='name'>
              <option value="">short by:<p className={classes.optionStyle}>Latest</p></option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="c++" disabled>C++</option>
              <option value="java" >Java</option>
            </select>
          </Box>
        </Grid> */}

        <SearchResultNotFoundCard />

      </Container>
    </>

  );
}
