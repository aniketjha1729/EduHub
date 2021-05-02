import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  trynews: {
    border: "red 2px solid",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <p>
        <i class="fas fa-users"></i> Welcome
      </p>
      <Link to="/admin/dashboard">
        <br />
        <Button variant="contained" color="primary" disableElevation>
          Primary
        </Button>
      </Link>
      <br />
      <IconButton aria-label="delete" className={classes.trynews}>
        <AccessTimeIcon border="none"  />
      </IconButton>
    </div>
  );
};

export default Navbar;
