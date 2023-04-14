import {
    makeStyles,
    createStyles,
    Theme,
} from "@material-ui/core/styles"; 
import { Box, TextField, Container, Typography, Grid, Button } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        darkTheme: {
            backgroundColor: '#34373A',
        },

        lightTheme: {
            backgroundColor: '#ffffff',
        },

        ctaWrapper: {
            padding: "67px 0 50px 0",
            margin: "0 auto",
            minHeight: "150px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            '@media(max-width: 600px)': {
                padding: "50px 0 20px 0",
            },
        },

        darkThemeHeading: {
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '56px',
            marginBottom: '60px',
            color: '#ffffff',
            maxWidth: '650px',
            '& b': {
                color: "#43D270",
                display: "inline-block"
            },
            '& strong': {
                color: "#43D270"
            },
            '@media(max-width: 600px)': {
                fontSize: '30px',
                lineHeight: '1.4',
                marginBottom: '30px',
            },
        },

        darkThemeHeadingSm: {
            fontSize: '24px',
            fontWeight: 400,
            fontFamily: 'Montserrat',
            lineHeight: '38px',
            color: '#ffffff',
            flexDirection: 'column',
            paddingBottom: '24px',
            maxWidth: '650px',
            '& b': {
                color: "#43D270",
                display: "inline-block"
            },
            '& strong': {
                color: "#43D270"
            },
            '@media(max-width: 600px)': {
                fontSize: '30px',
                lineHeight: '1.4',
                marginBottom: '30px',
            },
        },


        lightThemeHeading: {
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '56px',
            marginBottom: '60px',
            color: '#34373A',
            maxWidth: '724px',
            '& b': {
                color: "#43D270",
                display: "inline-block"
            },
            '& strong': {
                color: "#43D270"
            },
            '@media(max-width: 600px)': {
                fontSize: '30px',
                lineHeight: '1.4',
                marginBottom: '30px',
            },
        },


        lightThemeHeadingSm: {
            fontSize: '24px',
            fontWeight: 400,
            fontFamily: 'Montserrat',
            lineHeight: '38px',
            color: '#34373A',
            flexDirection: 'column',
            paddingBottom: '24px',
            maxWidth: '724px',
            '& b': {
                color: "#43D270",
                display: "inline-block"
            },
            '& strong': {
                color: "#43D270"
            },
            '@media(max-width: 600px)': {
                fontSize: '30px',
                lineHeight: '1.4',
                marginBottom: '30px',
            },
            '@media(max-width: 450px)': {
                marginBottom: '0px',
            },
        },

        ctaBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
        },

        ctaInput: {
            backgroundColor: 'transparent',
            width: '414px',
            maxWidth: '100%',
            fontSize: '15px',
            '& .MuiInputBase-root': {
                borderRadius: "8px !important",
                backgroundColor: '#FAFAFB',
            },
            '& .MuiOutlinedInput-input': {
                padding: '15px',
            },
            '@media(max-width: 450px)': {
                width: '300px',
                maxWidth: '100%',
            },
        },

        ctaButton: {
            backgroundColor: '#43D270',
            fontSize: '15px',
            fontWeight: 500,
            fontFamily: 'Lato',
            lineHeight: '18px',
            minHeight: '50px',
            width: '178px',
            borderRadius: "8px",
            boxShadow: "none !important",
            '@media(max-width: 670px)': {
                marginBottom: "30px",
            },
        },

        ctaThankYouBox: {
            margin: "0 auto",
        },

        darkThumbIconStyle: {
            opacity: 1
        },

        lightThumbIconStyle: {
            filter: "invert(1)",
            opacity: "0.6"
        }
    })
)

interface themeProps {
    heading: string | React.ReactNode,
    thankYouMessage: string,
    buttonLabel?: string,
    themeMode: 'light' | 'dark',
    svgpath?: any,
    inputPlaceholder?: string,
    inputValue?: string,
    headingType?: 'sm' | 'lg',
    submitted?: boolean,
    onChange?: any,
    onClick?: any
}

const CallToActionSection = ({ heading, thankYouMessage, buttonLabel, inputPlaceholder, themeMode, submitted, inputValue, headingType, onChange, onClick }: themeProps) => {

    const classes = useStyles()

    const backgroundMode = themeMode === 'dark' ? classes.darkTheme : classes.lightTheme;
    const ctaHeadingStyle = themeMode === 'dark' ? classes.darkThemeHeading : classes.lightThemeHeading;
    const ctaHeadingStyle2 = themeMode === 'dark' ? classes.darkThemeHeadingSm : classes.lightThemeHeadingSm;
    const thumbIconStyle = themeMode === 'dark' ? classes.darkThumbIconStyle : classes.lightThumbIconStyle;
    
    const ctaThankYouWrapper = clsx(classes.ctaWrapper, classes.ctaThankYouBox)
    const defaultHeading = "Try Our <b>‍Free</b> 14-Day Trial Today & Decide Later!!";

    return (
        <Container className={backgroundMode}>
            {!submitted ? 
            <Box className={classes.ctaWrapper}>
                <Typography
                    className={headingType === 'lg' ? ctaHeadingStyle : ctaHeadingStyle2}>
                    {heading ?? defaultHeading}
                </Typography>
                <Grid container className={classes.ctaBox} spacing={2}>
                    <Grid item>
                        <TextField
                            variant='outlined'
                            placeholder={inputPlaceholder}
                            className={classes.ctaInput}
                            onChange={() => ""}
                            value={inputValue}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            className={classes.ctaButton}
                            onClick={() => ""}
                        >
                            {buttonLabel}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            : 
            <Box className={ctaThankYouWrapper}>
                <Typography
                    className={ctaHeadingStyle2}
                >
                    {thankYouMessage}
                </Typography>
                <svg className={thumbIconStyle} width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 11H36C38.2092 11 40 12.7909 40 15V33C40 35.2091 38.2092 37 36 37H32C29.7909 37 28 35.2091 28 33V15C28 12.7909 29.7909 11 32 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.2462 37H19.5778C21.1572 37 22.7013 36.5325 24.0154 35.6564L27.1094 33.5937C27.6658 33.2228 28 32.5983 28 31.9296V15.5311C28 15.1831 27.9092 14.841 27.7365 14.5389L20 1H17.3426C13.3491 1 10.9672 5.45072 13.1824 8.7735L16 13H5.12313C2.52084 13 0.611408 15.4456 1.24256 17.9701L4.48509 30.9403C5.37543 34.5016 8.57529 37 12.2462 37Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Box>
            }
        </Container >
    )
}

export default CallToActionSection;