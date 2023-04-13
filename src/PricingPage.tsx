import React from 'react'
import {
    makeStyles,
    createStyles,
    Theme,
    styled
} from "@material-ui/core/styles";

import AddIcon from '@material-ui/icons/Add';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Grid from "@material-ui/core/Grid";
import { Container, Box, Button, TextField } from "@material-ui/core";
import MainHeadingPage from './MainHeadingPage';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import MinimizeIcon from '@material-ui/icons/Minimize';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { TableFooter } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import SubscriptionSection from './SubscriptionSection';





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },

        mainDiv: {
            paddingInline: '106px'
        },

        Heading1: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'center',
            marginBottom: '70px',
            marginTop: '70px'
        },

        GridStyle: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },

        startbtn: {
            backgroundColor: '#43D270'
        },

        IconStyle: {
            marginLeft: '8px'
        },

        contentStyle: {
            fontSize: '34px',
            fontWeight: 700,
            fontFamily: 'lato',
            lineHeight: '46px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'center',
            marginTop: '50px',
            marginBottom: '50px'
        },

        startbtn2: {
            backgroundColor: '#ffffff'
        },

        table: {
            marginBottom: '70px',

            '& .MuiTableBody-root .MuiTableRow-root .MuiTableCell-root': {
                border: 'none'
            },
            '& .MuiTableFooter-root .MuiTableRow-root .MuiTableCell-root': {
                border: 'none'
            },
            '& .MuiTableFooter-root .MuiTableRow-root .MuiTableCell-root MuiTableCell-footer MuiTableCell-sizeSmall': {
                borderBottom: 'none'
            },
            '& .MuiTableHead-root .MuiTableRow-root .MuiTableCell-root ': {
                border: 'none'
            }
        },

        starter: {
            color: '#7166F1'
        },

        Growth: {
            color: '#43D270'
        },

        Impact: {
            color: '#F96C30',
        },

        powerStyle: {
            fontSize: '24px',
            fontWeight: 400,
            fontFamily: 'lato',
            lineHeight: '32px',
        },

        btnStyle: {
            fontSize: '15px',
            fontWeight: 500,
            fontFamily: 'lato',
            lineHeight: '18px',
            textAlign: 'center',
            justifyContent: 'center',
        },

        rowStyle: {
            textAlign: 'center',
        },

        rowStyle2: {
            textAlign: 'center',
            display: 'contents',
        },

        checkIconStyle: {
            color: '#45B26B'
        }
        ,
        queStyle: {
            color: '#727272',
            fontSize: '20px',
            fontWeight: 700,
            fontFamily: 'Montserrat',
            lineHeight: '24px',
        },

        ansStyle: {
            color: 'black',
            fontSize: '17px',
            fontWeight: 400,
            fontFamily: 'lato',
            lineHeight: '26px',
        },

        accordianBox: {
            backgroundColor: 'white',
            '& .MuiPaper-elevation1': {
                boxShadow: 'none'
            },
            '& :before': {
                backgroundColor: 'white',
            },
            '& .Mui-expanded': {
                '& .MuiSvgIcon-root:first-child': {
                    display: 'none',
                },
                '& .MuiSvgIcon-root:last-child': {
                    display: 'inline-block',
                },
            },
            '& .MuiAccordionSummary-content.Mui-expanded': {
                '& .MuiTypography-root': {
                    color: 'black',
                }
            }
        },
        minimizeBtn: {
            display: 'none'
        },
        addBtn: {
            display: 'inline-block'
        },
    })
)
const HeadingText = styled(Typography)({
    color: 'black',
    fontSize: '48px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '56px',
});
const SubTittle = styled(Typography)({
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '13px',
})
const ContentStyle = styled(Typography)({
    fontSize: '15px',
    fontWeight: 400,
    fontFamily: 'lato',
    lineHeight: '26px',
})
const HiddenBox1 = styled(Box)({
    '@media(max-width: 900px)': {
        display: 'none',
    }
})
const HiddenBox2 = styled(Box)({
    '@media(min-width: 900px)': {
        display: 'none',
    }
})



const Lp5 = () => {
    const classes = useStyles();
    const heading = 'Our'
    const subHeading = 'Pricing'
    const rows = [
        { mainFeature: 'Environment', starter: true, growth: true, imapact: true },
        { mainFeature: 'Social', starter: true, growth: true, imapact: true },
        { mainFeature: 'Governance', starter: true, growth: true, imapact: true },
        { mainFeature: 'Survey Management', starter: true, growth: true, imapact: true },
        { mainFeature: 'Decarbonization health report', starter: true, growth: true, imapact: true },
        { mainFeature: 'ESG data manager', starter: true, growth: true, imapact: true },
        { mainFeature: 'Marketplace', starter: false, growth: true, imapact: true },
        { mainFeature: 'Sustainability advisor', starter: false, growth: true, imapact: true },
        { mainFeature: 'Carbon credit offset agent', starter: false, growth: false, imapact: true },
        { mainFeature: 'Energy attribute certificate', starter: false, growth: false, imapact: true },
    ]

    const Question = [
        { id: 1, que: 'Why You Need A Survey Management Tool?', ans: 'ESG initiatives in the green energy field should focus on promoting social inclusion, diversity, and fair labor practices. This can include creating local employment opportunities, providing training and education, and promoting diversity in the workforce. ' },
        { id: 2, que: 'The Benefits of Decarbonization Health Report', ans: 'Test 2' },
        { id: 3, que: 'How a ESG Data Manager Helps you?', ans: 'Test 3' },
        { id: 4, que: 'How to Get Benefits from Our Marketplace?', ans: 'Test 4' },
        { id: 5, que: 'The Benefits of a Sustainability Advisor', ans: 'Test 5' },
        { id: 6, que: 'How Our Carbon Credit Offset Agent Helps you Secure a Green Loan?', ans: 'Test 6' }
    ]

    return (
        <div >
            <Container>
                <MainHeadingPage heading={heading} subHeading={subHeading} />
                <Grid container className={classes.GridStyle} xs={12} sm={12} lg={12} md={12}>
                    <Box className={classes.Heading1}>
                        <HeadingText >We have pricing tiers that suit your business needs</HeadingText>
                    </Box>
                    <HiddenBox1 >
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.rowStyle}></TableCell>
                                    <TableCell className={classes.rowStyle}></TableCell>
                                    <TableCell className={classes.rowStyle}><Grid>
                                        <SubTittle className={classes.starter}>Starter</SubTittle>
                                        <ContentStyle>Billed annually</ContentStyle>
                                        <HeadingText><sup className={classes.powerStyle}>$</sup>1499</HeadingText>
                                        <ContentStyle>per month</ContentStyle>
                                    </Grid></TableCell>
                                    <TableCell className={classes.rowStyle}><Grid>
                                        <SubTittle className={classes.Growth}>Growth</SubTittle>
                                        <ContentStyle>Billed annually</ContentStyle>
                                        <HeadingText><sup className={classes.powerStyle}>$</sup>1899</HeadingText>
                                        <ContentStyle>per month</ContentStyle>
                                    </Grid></TableCell>
                                    <TableCell className={classes.rowStyle2}><Grid>
                                        <SubTittle className={classes.Impact}>Impact</SubTittle>
                                        <ContentStyle>Talk to us </ContentStyle>
                                        <HeadingText></HeadingText>
                                        <ContentStyle></ContentStyle>
                                    </Grid></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={`key_${index}`}>
                                        <TableCell component="th" scope="row">
                                            {row.mainFeature}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <InfoOutlinedIcon />
                                        </TableCell>
                                        {row.starter ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                            <TableCell align="center"> <MinimizeIcon /></TableCell>}
                                        {row.growth ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                            <TableCell align="center"> <MinimizeIcon /></TableCell>}
                                        {row.imapact ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                            <TableCell align="center"> <MinimizeIcon /></TableCell>}
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className={classes.btnStyle}>
                                        <Button className={classes.startbtn}>START NOW <CallMadeIcon className={classes.IconStyle} /></Button>
                                    </TableCell>
                                    <TableCell className={classes.btnStyle}>
                                        <Button className={classes.startbtn}>START NOW<CallMadeIcon className={classes.IconStyle} /></Button>
                                    </TableCell>
                                    <TableCell className={classes.btnStyle}>
                                        <Button className={classes.startbtn2}>CONTACT US<CallMadeIcon className={classes.IconStyle} /></Button>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </HiddenBox1>
                    <HiddenBox2 >
                        <Grid>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className={classes.rowStyle}><Grid>
                                            <SubTittle className={classes.starter}>Starter</SubTittle>
                                            <ContentStyle>Billed annually</ContentStyle>
                                            <HeadingText><sup className={classes.powerStyle}>$</sup>1499</HeadingText>
                                            <ContentStyle>per month</ContentStyle>
                                        </Grid></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={row.mainFeature}>
                                            <TableCell component="th" scope="row">
                                                {row.mainFeature}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <InfoOutlinedIcon />
                                            </TableCell>
                                            {row.starter ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                                <TableCell align="center"> <MinimizeIcon /></TableCell>}
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className={classes.btnStyle}>
                                            <Button className={classes.startbtn}>START NOW <CallMadeIcon className={classes.IconStyle} /></Button>
                                        </TableCell>

                                    </TableRow>
                                </TableFooter>
                            </Table>

                        </Grid>

                        <Grid>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>

                                        <TableCell className={classes.rowStyle}><Grid>
                                            <SubTittle className={classes.Growth}>Growth</SubTittle>
                                            <ContentStyle>Billed annually</ContentStyle>
                                            <HeadingText><sup className={classes.powerStyle}>$</sup>1899</HeadingText>
                                            <ContentStyle>per month</ContentStyle>
                                        </Grid></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={row.mainFeature}>
                                            <TableCell component="th" scope="row">
                                                {row.mainFeature}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <InfoOutlinedIcon />
                                            </TableCell>

                                            {row.growth ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                                <TableCell align="center"> <MinimizeIcon /></TableCell>}

                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>

                                        <TableCell className={classes.btnStyle}>
                                            <Button className={classes.startbtn}>START NOW<CallMadeIcon className={classes.IconStyle} /></Button>
                                        </TableCell>

                                    </TableRow>
                                </TableFooter>
                            </Table>

                        </Grid>

                        <Grid>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className={classes.rowStyle2}><Grid>
                                            <SubTittle className={classes.Impact}>Impact</SubTittle>
                                            <ContentStyle>Talk to us</ContentStyle>
                                        </Grid></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={row.mainFeature}>
                                            <TableCell component="th" scope="row">
                                                {row.mainFeature}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                <InfoOutlinedIcon />
                                            </TableCell>
                                            {row.imapact ? <TableCell align="center"><CheckIcon className={classes.checkIconStyle} /> </TableCell> :
                                                <TableCell align="center"> <MinimizeIcon /></TableCell>}
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell className={classes.btnStyle}>
                                            <Button className={classes.startbtn2}>CONTACT US<CallMadeIcon className={classes.IconStyle} /></Button>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>

                        </Grid>
                    </HiddenBox2>
                </Grid>

                <Grid >
                    <Box>
                        <Typography className={classes.contentStyle}>What Makes Our Offerings Compeling & Sets Us Apart</Typography>
                    </Box>
                    <Box className={classes.accordianBox}>
                        {Question.map((data, index) => (
                            <Accordion key={index + 1} >
                                <AccordionSummary
                                    expandIcon={
                                        <>
                                            <AddIcon className={classes.addBtn} />
                                            <MinimizeIcon className={classes.minimizeBtn} />
                                        </>
                                    }
                                    aria-controls={`panel${index + 1}a-content`}
                                    id={`panel${index + 1}a-header`}
                                >
                                    <Typography className={classes.queStyle} >{data.id}. {data.que}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.ansStyle}>
                                        {data.ans}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Box>
                </Grid>

                <SubscriptionSection
                    heading="Try Our ‍Free 14-Day Trial Today & Decide Later!!"
                    buttonLabel="GET STARTED"
                />


            </Container>
        </div >
    )
}
export default Lp5;