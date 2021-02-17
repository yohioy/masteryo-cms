import { makeStyles } from "@material-ui/core/styles";
import pageListGridStyle from "assets/jss/core/components/customTableContainerStyle";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: {
        outline: "0",
        padding: "30px"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5]
    },
}));

export default useStyles;
