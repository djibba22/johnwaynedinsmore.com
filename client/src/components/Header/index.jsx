import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../JDlogoblue.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: theme.spacing(1),
  },
  title: {
    color: "#497cb3",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={`jdLogo ${classes.avatar}`} src={logo} alt="John Dinsmore" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["John Dinsmore"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Coding Instructor",
            "Graphic Designer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;