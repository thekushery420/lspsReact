import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    margin: "7px",
    color: "rgb(2, 54, 56);",
  },
  accordion: {
    border: "2px solid rgb(2, 54, 56)",
    padding: "0",
    margin: "0",
  },
  specials: {
    paddingLeft: "5px",
    fontSize: "1.2rem",
    letterSpacing: "1px",
  },
}));

export default function AccordionSpecials(props) {
  const classes = useStyles();

  return (
    <>
      <Accordion key={props.id} className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioButtonCheckedIcon fontSize="medium" />
          <Typography className={classes.specials}>
            {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
