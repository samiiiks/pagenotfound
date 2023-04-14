import { FC, memo } from 'react'
import {
    makeStyles,
    createStyles,
    Theme,
} from "@material-ui/core/styles";
import CallMadeIcon from '@material-ui/icons/CallMade';
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headingCard: {
            display: 'flex',
            flexDirection: 'column',
            padding: "70px 0",
            minHeight: '333px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#ECFBF1',
            borderRadius: "16px",
        },
        maintag: {
            fontSize: '20px',
            fontWeight: 600,
            fontFamily: 'Montserrat',
            lineHeight: '24px',
            color: '#43D270',
            marginBottom: '29px',
        },
        heading: {
            fontSize: '48px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '56px',
            marginBottom: '24px',
            maxWidth: "800px",
            '@media(max-width: 600px)': {
                marginBottom: "30px",
            },
        },
        description: {
            display: 'flex',
            fontWeight: 400,
            fontSize: '17px',
            lineHeight: '26px',
            alignItems: "center",
            marginBottom: "49px"
        },
        buttonIconStyle: {
            marginLeft: '8px'
        },
        buttonStyle: {
            padding: "16px 12px",
            width: "180px",
            background: "#43D270",
            borderRadius: "8px",
            margin: "0 15px 15px 15px",
            boxShadow: "none !important",
            alignItems: "center",
        },
        buttonViewPricing: {
            padding: "16px 12px",
            margin: "0 15px 15px 15px",
            width: "180px",
            borderRadius: "8px",
            boxShadow: "none !important",
        },

    })
)
interface PropTypes {
    tag?: string;
    heading?: string;
    description?: string;
    button1Label?: string;
    button1Link?: string;
    button2Label?: string;
    button2Link?: string;
}

const PageHeadingFullSection: FC<PropTypes> = ({ tag, heading, description, button1Label, button1Link, button2Label, button2Link }: PropTypes) => {

    const classes = useStyles();
    return (
        <Box className={classes.headingCard}>

            {tag &&
                <Typography component="p" className={classes.maintag}>{tag}</Typography>
            }
            {heading &&
                <Typography className={classes.heading}>{heading}</Typography>
            }
            {description &&
                <Typography className={classes.description}>{description}</Typography>
            }

            {/* {(button1Label || button2Label) && */}
                <Box>
                    {button1Label &&
                        <Link to={button1Link ?? "/sign-up"}>
                            <Button variant="contained" className={classes.buttonStyle}>{button1Label  ?? "SIGN UP"}<CallMadeIcon className={classes.buttonIconStyle} /></Button>
                        </Link>
                    }

                    {button2Label &&
                        <Link to={button2Link ?? "/pricing"}>
                            <Button variant="contained" className={classes.buttonViewPricing}>{button2Label  ?? "VIEW PRICING"} <CallMadeIcon className={classes.buttonIconStyle} /></Button>
                        </Link>
                    }
                </Box>
            {/* } */}
        </Box>
    )
}

export default memo(PageHeadingFullSection);