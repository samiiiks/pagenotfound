import React from 'react'
import {
    makeStyles,
    createStyles,
    Theme,
    styled
} from "@material-ui/core/styles";
import CallMadeIcon from '@material-ui/icons/CallMade';
import Grid from "@material-ui/core/Grid";
import { Container, Box, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import image1 from './assest/image1.jpg'
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
margin:'auto',
            width:'1230px'
        },

        IconStyle: {
            marginLeft: '8px'
        },

        HeadingStyle: {
            display: 'flex',
            alignItem: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '25px',
            marginTop: '54px'

        },
        ImageStyle: {
            display: 'flex',
            justifyContent: 'center',
        },

        ImageStyle1: {
            minWidth: '144px',
            marginBottom: '94px',
            minHeight: '48px',
            marginTop: '94px',
        },

        ContentStyle: {
            textAlign: 'end',
            marginBottom: '48px',
        },

        paragraphStyle: {
            color: 'black',
            fontSize: '15px',
            fontWeight: 400,
            fontFamily: 'lato',
            lineHeight: '26px',
            textAlign:'left'
        },

        BoxStyle: {
            display: 'flex',
            justifyContent: 'end',
            marginTop: '7px',
            marginBottom: '19px',
            marginRight: '20px'
        },

        contactButton: {
            backgroundColor: '#43D270',
        },

        websiteButton: {
            backgroundColor: '#FFFFFF',
            borderColor: "black"
        },

        ButtonBoxSTyle: {
            marginTop: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '55px',

        },

        firstGrid: {
            marginBottom: "70px"
        },

        secondGrid: {
            marginTop: "70px",
            marginBottom: '62px'
        },

        IconBoxStyle: {
            display: 'flex',
            justifyContent: 'space-between',
            '@media(max-width: 900px)': {
                display:'inline-block'
               }
        },

        imgStyle: {
            textAlign: 'center'
        },

        GridStyle: {
            marginTop: '70px'
        },

        IconStyle2: {
            display: 'flex'
        },
        mobileStyle:{
            '@media(max-width: 900px)': {
             display:'grid'
            }
        }
    })
)

const HeadingText = styled(Typography)({
    color: 'black',
    fontSize: '34px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '46px',
});

const ContentText = styled(Typography)({
    color: '#F96C30',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '13px',
})

const Button1 = styled(Button)({
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'lato',
    lineHeight: '18px',
    borderRadius: '8px',
    '& .MuiButton-label': {
        marginInline: '25px',
        marginBlock: '19px'
    },
    '@media(max-width: 900px)': {
        '& .MuiButton-label': {
            marginInline: '5px',
            marginBlock: '5px'
        },
    }
})

const DescribeTEXT = styled(Typography)({
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    lineHeight: '30px',
    textAlign: 'start',
    marginRight: '40px',
    marginBottom: '7px',
    marginLeft: '30px'

})


const Heading = styled(Typography)({
    fontSize: '48px',
    fontWeight: 600,
    fontFamily: 'Montserrat',
    lineHeight: '56px',
    textAlign: 'center'

})

const TittleText = styled(Typography)({
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '24px',
    textAlign: 'start',
    marginBottom: '26px',
    marginLeft: '30px'
})

const DummyData = [
    {
        id: 1,
        title: 'Environmental',
        color: '#43D270',
        image: image1,
        description: '800 Super Waste Management Pte Ltd',
        button: 'Contact'
    },
    {
        id: 2,
        title: 'Social',
        color: '#7166F1',
        image: image1,
        description: "Bizsu: Products & Services to reduce your company's ...",
        button: 'Contact'
    },
    {
        id: 3,
        title: 'Governance',
        color: '#F96C30',
        image: image1,
        description: 'Aquama Pacific & Bewoki Pte. Ltd. Partnership Services',
        button: 'Contact'
    },
]

const DummyIcons = {

    twitter: <path d="M14.6054 3.23858C14.6155 3.3807 14.6155 3.52286 14.6155 3.66498C14.6155 8 11.316 12.995 5.28555 12.995C3.42767 12.995 1.70179 12.4569 0.25 11.5229C0.51397 11.5533 0.767752 11.5635 1.04188 11.5635C2.57485 11.5635 3.98605 11.0457 5.11296 10.1625C3.67133 10.132 2.4632 9.18785 2.04694 7.88834C2.25001 7.91878 2.45304 7.93909 2.66626 7.93909C2.96067 7.93909 3.25511 7.89847 3.5292 7.82744C2.02666 7.52284 0.899721 6.20306 0.899721 4.60914V4.56855C1.33625 4.81221 1.84391 4.96449 2.38195 4.98477C1.49869 4.39592 0.920034 3.39086 0.920034 2.25379C0.920034 1.64466 1.08244 1.08629 1.36672 0.598971C2.98095 2.58882 5.40736 3.8883 8.12816 4.03045C8.07741 3.7868 8.04694 3.53301 8.04694 3.2792C8.04694 1.47207 9.50888 0 11.3261 0C12.2703 0 13.1231 0.395939 13.7221 1.03554C14.4632 0.89341 15.1738 0.619284 15.8033 0.243657C15.5596 1.0051 15.0419 1.64469 14.3617 2.05076C15.0216 1.97973 15.6612 1.79694 16.25 1.54316C15.8034 2.19288 15.245 2.77154 14.6054 3.23858Z" fill="#A1A1A1" />,
    share: <svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.586 1.902C5.538 1.986 5.486 2.048 5.43 2.088C5.378 2.124 5.312 2.142 5.232 2.142C5.148 2.142 5.056 2.112 4.956 2.052C4.86 1.988 4.744 1.918 4.608 1.842C4.472 1.766 4.312 1.698 4.128 1.638C3.948 1.574 3.734 1.542 3.486 1.542C3.262 1.542 3.066 1.57 2.898 1.626C2.73 1.678 2.588 1.752 2.472 1.848C2.36 1.944 2.276 2.06 2.22 2.196C2.164 2.328 2.136 2.474 2.136 2.634C2.136 2.838 2.192 3.008 2.304 3.144C2.42 3.28 2.572 3.396 2.76 3.492C2.948 3.588 3.162 3.674 3.402 3.75C3.642 3.826 3.888 3.908 4.14 3.996C4.392 4.08 4.638 4.18 4.878 4.296C5.118 4.408 5.332 4.552 5.52 4.728C5.708 4.9 5.858 5.112 5.97 5.364C6.086 5.616 6.144 5.922 6.144 6.282C6.144 6.674 6.076 7.042 5.94 7.386C5.808 7.726 5.612 8.024 5.352 8.28C5.096 8.532 4.782 8.732 4.41 8.88C4.038 9.024 3.612 9.096 3.132 9.096C2.856 9.096 2.584 9.068 2.316 9.012C2.048 8.96 1.79 8.884 1.542 8.784C1.298 8.684 1.068 8.564 0.852 8.424C0.636 8.284 0.444 8.128 0.276 7.956L0.75 7.182C0.79 7.126 0.842 7.08 0.906 7.044C0.97 7.004 1.038 6.984 1.11 6.984C1.21 6.984 1.318 7.026 1.434 7.11C1.55 7.19 1.688 7.28 1.848 7.38C2.008 7.48 2.194 7.572 2.406 7.656C2.622 7.736 2.88 7.776 3.18 7.776C3.64 7.776 3.996 7.668 4.248 7.452C4.5 7.232 4.626 6.918 4.626 6.51C4.626 6.282 4.568 6.096 4.452 5.952C4.34 5.808 4.19 5.688 4.002 5.592C3.814 5.492 3.6 5.408 3.36 5.34C3.12 5.272 2.876 5.198 2.628 5.118C2.38 5.038 2.136 4.942 1.896 4.83C1.656 4.718 1.442 4.572 1.254 4.392C1.066 4.212 0.914 3.988 0.798 3.72C0.686 3.448 0.63 3.114 0.63 2.718C0.63 2.402 0.692 2.094 0.816 1.794C0.944 1.494 1.128 1.228 1.368 0.995999C1.608 0.763999 1.904 0.578 2.256 0.438C2.608 0.298 3.012 0.228 3.468 0.228C3.98 0.228 4.452 0.308 4.884 0.468C5.316 0.628 5.684 0.852 5.988 1.14L5.586 1.902ZM14.8659 0.323999V9H13.2459V5.208H9.17194V9H7.55194V0.323999H9.17194V4.056H13.2459V0.323999H14.8659ZM21.382 5.724L20.326 2.838C20.274 2.71 20.22 2.558 20.164 2.382C20.108 2.206 20.052 2.016 19.996 1.812C19.944 2.016 19.89 2.208 19.834 2.388C19.778 2.564 19.724 2.718 19.672 2.85L18.622 5.724H21.382ZM24.232 9H22.984C22.844 9 22.73 8.966 22.642 8.898C22.554 8.826 22.488 8.738 22.444 8.634L21.796 6.864H18.202L17.554 8.634C17.522 8.726 17.46 8.81 17.368 8.886C17.276 8.962 17.162 9 17.026 9H15.766L19.18 0.323999H20.824L24.232 9ZM27.7521 4.452C28.0561 4.452 28.3201 4.414 28.5441 4.338C28.7721 4.262 28.9581 4.158 29.1021 4.026C29.2501 3.89 29.3601 3.73 29.4321 3.546C29.5041 3.362 29.5401 3.16 29.5401 2.94C29.5401 2.5 29.3941 2.162 29.1021 1.926C28.8141 1.69 28.3721 1.572 27.7761 1.572H26.7441V4.452H27.7521ZM31.9041 9H30.4461C30.1701 9 29.9701 8.892 29.8461 8.676L28.0221 5.898C27.9541 5.794 27.8781 5.72 27.7941 5.676C27.7141 5.632 27.5941 5.61 27.4341 5.61H26.7441V9H25.1301V0.323999H27.7761C28.3641 0.323999 28.8681 0.385999 29.2881 0.51C29.7121 0.629999 30.0581 0.799999 30.3261 1.02C30.5981 1.24 30.7981 1.504 30.9261 1.812C31.0541 2.116 31.1181 2.452 31.1181 2.82C31.1181 3.112 31.0741 3.388 30.9861 3.648C30.9021 3.908 30.7781 4.144 30.6141 4.356C30.4541 4.568 30.2541 4.754 30.0141 4.914C29.7781 5.074 29.5081 5.2 29.2041 5.292C29.3081 5.352 29.4041 5.424 29.4921 5.508C29.5801 5.588 29.6601 5.684 29.7321 5.796L31.9041 9ZM34.461 1.608V4.014H37.497V5.256H34.461V7.71H38.313V9H32.841V0.323999H38.313V1.608H34.461Z" fill="#727272" />
    </svg>,
    facebook: <path d="M2.39687 16V8.84375H0V6H2.39687V3.75938C2.39687 1.325 3.88438 0 6.05625 0C7.09688 0 7.99062 0.078125 8.25 0.1125V2.65625H6.74375C5.5625 2.65625 5.33437 3.21875 5.33437 4.04063V6H8L7.63438 8.84375H5.33437V16H2.39687Z" fill="#A1A1A1" />,
    linkdin1: <path d="M3.83134 16H0.514228V5.31786H3.83134V16Z" fill="#A1A1A1" />,
    linkdin2: < path d="M2.171 3.86071C1.11052 3.86071 0.25 2.98214 0.25 1.92143C0.25 0.860714 1.11052 0 2.171 0C3.23148 0 4.092 0.860714 4.092 1.92143C4.092 2.98214 3.23148 3.86071 2.171 3.86071Z" fill="#A1A1A1" />,
    linkdin3: <path d="M12.9365 16V10.8C12.9365 9.56071 12.9115 7.97143 11.2118 7.97143C9.48722 7.97143 9.223 9.31786 9.223 10.7107V16H5.90945V5.31786H9.09088V6.775H9.1373C9.58006 5.93571 10.662 5.05 12.2759 5.05C15.6323 5.05 16.25 7.26071 16.25 10.1321V16H12.9365Z" fill="#A1A1A1" />,
    G: <path d="M11.9144 5.1405C11.9717 5.44338 12.0126 5.74625 12.0126 6.13912C12.0126 9.56891 9.71247 12 6.25 12C2.93488 12 0.25 9.31516 0.25 6C0.25 2.68484 2.93488 0 6.25 0C7.87075 0 9.22134 0.589344 10.2691 1.57162L8.64016 3.13506C8.19813 2.70941 7.42053 2.21009 6.25 2.21009C4.20362 2.21009 2.53375 3.9045 2.53375 6C2.53375 8.0955 4.20362 9.78991 6.25 9.78991C8.62378 9.78991 9.51603 8.07912 9.65516 7.20325H6.25V5.14047H11.9144V5.1405ZM17.7083 5.34166V3.6H15.9583V5.34166H14.2167V7.09169H15.9583V8.83334H17.7083V7.09169H19.45V5.34166H17.7083Z" fill="#A1A1A1" />,
    T: <path d="M9.88457 15.0094C9.45957 15.4625 8.32207 16 6.84082 16C3.06582 16 2.24707 13.225 2.24707 11.6062V7.10625H0.762695C0.59082 7.10625 0.450195 6.96562 0.450195 6.79375V4.66875C0.450195 4.44375 0.59082 4.24375 0.80332 4.16875C2.74082 3.4875 3.3502 1.79375 3.4377 0.509375C3.4627 0.165625 3.64082 0 3.94082 0H6.15645C6.32832 0 6.46895 0.140625 6.46895 0.3125V3.9125H9.0627C9.23457 3.9125 9.3752 4.05 9.3752 4.22188V6.775C9.3752 6.94688 9.23457 7.0875 9.0627 7.0875H6.45645V11.25C6.45645 12.3188 7.19707 12.925 8.58145 12.3687C8.73145 12.3094 8.86269 12.2688 8.97832 12.3C9.0877 12.3281 9.15957 12.4062 9.20957 12.5469L9.89707 14.5562C9.95332 14.7125 10.0002 14.8875 9.88457 15.0094Z" fill="#A1A1A1" />,
    P: <path d="M7.49573 0C4.20666 0 0.956055 2.19271 0.956055 5.74145C0.956055 7.99827 2.22552 9.28056 2.99489 9.28056C3.31226 9.28056 3.49499 8.39578 3.49499 8.14574C3.49499 7.8476 2.73523 7.21287 2.73523 5.97226C2.73523 3.39486 4.69713 1.5676 7.23606 1.5676C9.41916 1.5676 11.0348 2.80821 11.0348 5.08748C11.0348 6.78972 10.352 9.98261 8.14008 9.98261C7.34185 9.98261 6.65903 9.40558 6.65903 8.57851C6.65903 7.36675 7.50534 6.19345 7.50534 4.94322C7.50534 2.82103 4.49517 3.20572 4.49517 5.7703C4.49517 6.30886 4.56249 6.90512 4.80292 7.3956C4.36053 9.2998 3.45652 12.1369 3.45652 14.0988C3.45652 14.7046 3.54307 15.3009 3.60077 15.9068C3.70977 16.0286 3.65527 16.0158 3.82197 15.9549C5.43765 13.7429 5.37995 13.3102 6.11085 10.4154C6.50516 11.1655 7.52458 11.5694 8.33242 11.5694C11.7369 11.5694 13.266 8.25152 13.266 5.26059C13.266 2.07731 10.5155 0 7.49573 0Z" fill="#A1A1A1" />,
    Tag: < path d="M6.936 1.452H4.2V9H2.928V1.452H0.18V0.383999H6.936V1.452ZM9.85191 6.294C9.37591 6.31 8.97191 6.348 8.63991 6.408C8.30791 6.464 8.03791 6.54 7.82991 6.636C7.62191 6.732 7.47191 6.846 7.37991 6.978C7.28791 7.106 7.24191 7.25 7.24191 7.41C7.24191 7.562 7.26591 7.694 7.31391 7.806C7.36591 7.914 7.43391 8.004 7.51791 8.076C7.60591 8.144 7.70791 8.194 7.82391 8.226C7.93991 8.258 8.06591 8.274 8.20191 8.274C8.38191 8.274 8.54591 8.256 8.69391 8.22C8.84591 8.184 8.98791 8.134 9.11991 8.07C9.25191 8.002 9.37791 7.92 9.49791 7.824C9.61791 7.728 9.73591 7.618 9.85191 7.494V6.294ZM6.41991 3.756C6.75991 3.432 7.12791 3.19 7.52391 3.03C7.92391 2.87 8.36191 2.79 8.83791 2.79C9.18591 2.79 9.49391 2.848 9.76191 2.964C10.0299 3.076 10.2559 3.234 10.4399 3.438C10.6239 3.642 10.7619 3.886 10.8539 4.17C10.9499 4.454 10.9979 4.768 10.9979 5.112V9H10.4759C10.3599 9 10.2719 8.982 10.2119 8.946C10.1519 8.906 10.1039 8.834 10.0679 8.73L9.94191 8.196C9.78591 8.34 9.63191 8.468 9.47991 8.58C9.32791 8.688 9.16791 8.782 8.99991 8.862C8.83591 8.938 8.65991 8.996 8.47191 9.036C8.28391 9.076 8.07591 9.096 7.84791 9.096C7.60791 9.096 7.38191 9.064 7.16991 9C6.96191 8.932 6.77991 8.83 6.62391 8.694C6.46791 8.558 6.34391 8.388 6.25191 8.184C6.16391 7.98 6.11991 7.742 6.11991 7.47C6.11991 7.23 6.18391 7 6.31191 6.78C6.44391 6.556 6.65591 6.356 6.94791 6.18C7.24391 6.004 7.62791 5.86 8.09991 5.748C8.57591 5.636 9.15991 5.572 9.85191 5.556V5.112C9.85191 4.652 9.75391 4.308 9.55791 4.08C9.36191 3.852 9.07391 3.738 8.69391 3.738C8.43791 3.738 8.22191 3.77 8.04591 3.834C7.87391 3.898 7.72391 3.97 7.59591 4.05C7.47191 4.126 7.36191 4.196 7.26591 4.26C7.17391 4.324 7.07791 4.356 6.97791 4.356C6.89791 4.356 6.82791 4.334 6.76791 4.29C6.71191 4.246 6.66591 4.194 6.62991 4.134L6.41991 3.756ZM14.7062 5.958C14.9142 5.958 15.0962 5.93 15.2522 5.874C15.4122 5.818 15.5442 5.74 15.6482 5.64C15.7562 5.536 15.8362 5.412 15.8882 5.268C15.9442 5.124 15.9722 4.966 15.9722 4.794C15.9722 4.442 15.8642 4.162 15.6482 3.954C15.4362 3.742 15.1222 3.636 14.7062 3.636C14.2942 3.636 13.9802 3.742 13.7642 3.954C13.5522 4.162 13.4462 4.442 13.4462 4.794C13.4462 4.966 13.4722 5.124 13.5242 5.268C13.5802 5.408 13.6602 5.53 13.7642 5.634C13.8722 5.734 14.0042 5.814 14.1602 5.874C14.3202 5.93 14.5022 5.958 14.7062 5.958ZM16.5722 9.318C16.5722 9.174 16.5322 9.06 16.4522 8.976C16.3722 8.888 16.2622 8.82 16.1222 8.772C15.9862 8.72 15.8262 8.684 15.6422 8.664C15.4582 8.64 15.2642 8.622 15.0602 8.61C14.8602 8.598 14.6542 8.588 14.4422 8.58C14.2302 8.568 14.0262 8.548 13.8302 8.52C13.6222 8.624 13.4502 8.75 13.3142 8.898C13.1822 9.046 13.1162 9.22 13.1162 9.42C13.1162 9.548 13.1482 9.668 13.2122 9.78C13.2802 9.892 13.3822 9.988 13.5182 10.068C13.6582 10.152 13.8322 10.216 14.0402 10.26C14.2522 10.308 14.5042 10.332 14.7962 10.332C15.0842 10.332 15.3382 10.306 15.5582 10.254C15.7782 10.206 15.9622 10.136 16.1102 10.044C16.2622 9.956 16.3762 9.85 16.4522 9.726C16.5322 9.602 16.5722 9.466 16.5722 9.318ZM17.7602 3.132V3.57C17.7602 3.714 17.6702 3.804 17.4902 3.84L16.8362 3.936C16.8922 4.06 16.9362 4.192 16.9682 4.332C17.0002 4.468 17.0162 4.612 17.0162 4.764C17.0162 5.064 16.9582 5.336 16.8422 5.58C16.7262 5.82 16.5662 6.026 16.3622 6.198C16.1582 6.37 15.9142 6.502 15.6302 6.594C15.3502 6.686 15.0422 6.732 14.7062 6.732C14.4302 6.732 14.1722 6.702 13.9322 6.642C13.8122 6.714 13.7202 6.794 13.6562 6.882C13.5962 6.966 13.5662 7.05 13.5662 7.134C13.5662 7.274 13.6242 7.378 13.7402 7.446C13.8602 7.514 14.0142 7.564 14.2022 7.596C14.3942 7.624 14.6122 7.642 14.8562 7.65C15.1042 7.658 15.3542 7.672 15.6062 7.692C15.8622 7.708 16.1122 7.74 16.3562 7.788C16.6042 7.832 16.8222 7.906 17.0102 8.01C17.2022 8.11 17.3562 8.25 17.4722 8.43C17.5922 8.606 17.6522 8.836 17.6522 9.12C17.6522 9.384 17.5862 9.64 17.4542 9.888C17.3262 10.136 17.1382 10.356 16.8902 10.548C16.6422 10.74 16.3402 10.894 15.9842 11.01C15.6282 11.126 15.2242 11.184 14.7722 11.184C14.3202 11.184 13.9262 11.14 13.5902 11.052C13.2582 10.964 12.9802 10.846 12.7562 10.698C12.5362 10.55 12.3702 10.378 12.2582 10.182C12.1502 9.986 12.0962 9.782 12.0962 9.57C12.0962 9.274 12.1882 9.024 12.3722 8.82C12.5562 8.612 12.8102 8.45 13.1342 8.334C12.9582 8.254 12.8182 8.146 12.7142 8.01C12.6102 7.87 12.5582 7.686 12.5582 7.458C12.5582 7.37 12.5742 7.28 12.6062 7.188C12.6382 7.092 12.6862 6.998 12.7502 6.906C12.8182 6.81 12.9002 6.72 12.9962 6.636C13.0962 6.552 13.2102 6.476 13.3382 6.408C13.0382 6.24 12.8022 6.018 12.6302 5.742C12.4582 5.462 12.3722 5.136 12.3722 4.764C12.3722 4.464 12.4302 4.194 12.5462 3.954C12.6622 3.714 12.8222 3.508 13.0262 3.336C13.2342 3.164 13.4802 3.032 13.7642 2.94C14.0522 2.848 14.3662 2.802 14.7062 2.802C15.2342 2.802 15.6882 2.912 16.0682 3.132H17.7602Z" fill="#727272" />
}
const DummyData1 = {
    Heading: 'Alba: E-Waste Collection - PRS Operator for E-Waste and other related services',
    Heading1: 'You may also like'

}

const MarketDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Grid className={classes.firstGrid}>

                    <IconButton aria-label="delete">
                    </IconButton>
                    <Box className={classes.HeadingStyle}>
                        <HeadingText>{DummyData1.Heading}</HeadingText>
                    </Box>
                    <Box className={classes.ContentStyle}>
                        <ContentText >IN GOVERNANCE</ContentText>
                    </Box>
                    <Box className={classes.ImageStyle}>
                        <img src={image1} alt="" className={classes.ImageStyle1} />
                    </Box>
                    <Typography className={classes.paragraphStyle}>
                        <p>Since July 1st 2021, NEA appointed Alba as E-waste PRS operator. PRS stands for : Producer Responsiblity Schemes.</p>

                        <p> The ALBA Group, formed in 1968, has been operating such Producer Responsibility Schemes in countries such as Germany and Hong Kong. Please find here more information about this scheme. For all regulated e-waste, with a volume above 1 m3, you can arrange for free collection by Alba E-Waste.</p>

                        <p> Whether it’s Europe’s CSRD and Right to Repair, Canada’s required supply chain’s emissions disclosure, or the SEC’s climate disclosure rule in the U.S., organizations around the globe need to prepare for significant changes and operational implications.</p>

                        <p>  Join us on Thursday, March 23 at 11 a.m. EDT for a live conversation about the EU’s regulatory approach to sustainability disclosures and ESG, as we prepare for other countries and regions to follow suit. Our expert panel will discuss how changes may affect specific industries, regions, international organizations, and global regulations — and how you can prepare.</p>
                    </Typography>
                    <Box className={classes.ButtonBoxSTyle}>
                        <Button1 className={classes.contactButton}>CONTACT <CallMadeIcon className={classes.IconStyle} /></Button1>

                        <Button1 className={classes.websiteButton} variant='outlined'>VISIT WEBSITE <CallMadeIcon className={classes.IconStyle} /></Button1>
                    </Box>
                    <Box className={classes.IconBoxStyle}>
                        <Box className={classes.IconStyle2}>
                           
                            <IconButton aria-label="share">
                                <SvgIcon>
                                    {DummyIcons.share}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="facebook">
                                <SvgIcon>
                                    {DummyIcons.facebook}
                                </SvgIcon>
                            </IconButton>

                            <IconButton aria-label="twitter">
                                <SvgIcon>
                                    {DummyIcons.twitter}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="linkdin">
                                <SvgIcon>
                                    {DummyIcons.linkdin1}
                                    {DummyIcons.linkdin2}
                                    {DummyIcons.linkdin3}
                                </SvgIcon>
                            </IconButton>
                        
                            <IconButton aria-label="G">
                                <SvgIcon>
                                    {DummyIcons.G}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="T">
                                <SvgIcon>
                                    {DummyIcons.T}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="p">
                                <SvgIcon>
                                    {DummyIcons.P}
                                </SvgIcon>
                            </IconButton>
                        </Box>
                        <Box className={classes.IconStyle2}>
                            <IconButton aria-label="Tag">
                                <SvgIcon>
                                    {DummyIcons.Tag}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="Tag">
                                <SvgIcon>
                                    {DummyIcons.Tag}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="Tag">
                                <SvgIcon>
                                    {DummyIcons.Tag}
                                </SvgIcon>
                            </IconButton>
                            <IconButton aria-label="Tag">
                                <SvgIcon>
                                    {DummyIcons.Tag}
                                </SvgIcon>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid className={classes.secondGrid}>
                    <Heading>{DummyData1.Heading1}</Heading>
                    <Grid container spacing={5} className={classes.GridStyle}>
                        {
                            DummyData.map((details: any, index: number) => {
                                const tittleColor=details.color
                                return <>
                                    <Grid item key={`key_${index}`} xs={12} sm={12} md={4}>
                                        <Box className={classes.imgStyle}>
                                            <img src={details.image} alt="" className={classes.ImageStyle1} />
                                        </Box>
                                        <Box >
                                            <TittleText style={{color:tittleColor}}>{details.title}</TittleText>
                                        </Box>
                                        <DescribeTEXT>{details.description}</DescribeTEXT>
                                        <Box className={classes.BoxStyle}>
                                            <Button1 className={classes.contactButton}>{details.button}</Button1>
                                        </Box>
                                    </Grid>
                                </>
                            })
                        }
                    </Grid>
                </Grid>
            </Container >

        </div >
    )
}


export default MarketDetails