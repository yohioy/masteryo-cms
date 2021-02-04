import React from "react";

// @material-ui/core components]
import CircularProgress from "@material-ui/core/CircularProgress";

/* styles */
import useStyles from "./pageChange.styles";

export default function PageChange(props) {
  // create styles for this component
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading..
        </h4>
      </div>
    </div>
  );
}
