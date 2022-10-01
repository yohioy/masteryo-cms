import { makeStyles } from '@material-ui/core/styles';

import {grayColor, primaryBoxShadow, whiteColor} from '../../../assets/jss/material-cms-kit';

const signupStyles = () => ({
    container: {
        transition: "all 150ms ease 0s",
        display: "block",
    },
    boxContainer: {
        ...primaryBoxShadow,
        margin: "20px 0",
        padding: "20px 20px 10px 20px",
        borderColor: grayColor[5],
        borderRadius: "3px",
        borderWidth: "1px",
        borderStyle: "solid",
    },
});

const useStyles = makeStyles(signupStyles);

export default useStyles;
