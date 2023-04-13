import React from 'react'
import {
    makeStyles,
    createStyles,
    Theme,
    styled
} from "@material-ui/core/styles";
import CallMadeIcon from '@material-ui/icons/CallMade';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Box, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        mainHeading: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '333px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#ECFBF1'
        },
        subHeading: {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Montserrat',
            lineHeight: '24.38px',
            color: '#43D270',
            marginBottom: '24px',

        },
        heading: {
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '56px',
            marginBottom: '24px',
            paddingTop: '24px',
        },
    })
)
interface headingProps {
    heading: string;
    subHeading: string;
}

const MainHeadingPage: React.FC<headingProps> = ({ heading, subHeading }: headingProps) => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.mainHeading} xs={12} sm={12} md={12} lg={12}>
                <Typography variant='h3' component="p" className={classes.subHeading}>{heading}</Typography>
                <Typography className={classes.heading}>{subHeading}</Typography>
            </Grid>
        </div >

    )
}
export default MainHeadingPage;