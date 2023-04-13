import React from 'react'
import {
    makeStyles,
    createStyles,
    Theme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        Register: {
            backgroundColor: '#34373A',
            minHeight: '300px',
        },
        innerRegister: {
            maxWidth: '724px',
            margin: 'auto',
            marginBottom: '50px',
        },

        RegisterHeading: {
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '56px',
            paddingTop: '67px',
            paddingBottom: '59px'
        },

        inputRegister: {
            backgroundColor: '#F1F1F5',
            borderRadius: "8px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '414px',
            width: '100%'
        },

        inputBox: {
            width: '100%',
            fontSize: '15px',
            '& .MuiOutlinedInput-input': {
                padding: '15px'
            }
        },

        RegisterButton: {
            backgroundColor: '#43D270',
            marginLeft: '18px',
            fontSize: '15px',
            fontWeight: 500,
            fontFamily: 'Lato',
            lineHeight: '18px',
            minHeight: '44px',
            width: '178px',
            padding: 0,

        },
        subscribeBox: {
            display: 'flex',
            justifyContent: 'center'
        },

        RegisterStyle: {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            textAlign: 'center',

        },
    })
)

interface HeadingProps {
    heading: string;
    buttonLabel: string;
}

const SubscriptionSection: React.FC<HeadingProps> = ({ heading, buttonLabel }: HeadingProps) => {
    const classes = useStyles();
    return (

        <Grid className={classes.RegisterStyle}>
            <Box className={classes.innerRegister}>

                <Box className={classes.RegisterHeading} >
                    {heading}
                </Box>
                <Box className={classes.subscribeBox}>
                    <Box className={classes.inputRegister} >
                        <TextField placeholder="Email address"
                            variant='outlined'
                            className={classes.inputBox}
                        />
                    </Box>
                    <Button variant="contained" className={classes.RegisterButton}>
                        {buttonLabel}
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}
export default SubscriptionSection;