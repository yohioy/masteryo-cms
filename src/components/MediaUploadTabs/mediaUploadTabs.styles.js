import { makeStyles } from "@material-ui/core/styles";
import tabStyle from "assets/jss/core/components/tabStyle";

const styles = () => ({
    ...tabStyle(),
    selectedFileDisplayContainer: {
        padding: "20px"
    },
    uploadButtonContainer: {
        display: "none"
    },
    show: {
        display: "block"
    }
});

const useStyles = makeStyles(styles);

export default useStyles