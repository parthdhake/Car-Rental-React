import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Header from "../components/Header";
import "./css/main.css";

const useStyles = makeStyles({
  heading: {
    fontSize: "1.1rem",
  },
});

export default function Faq() {
  const classes = useStyles();

  return (
    <div className="top-offset AboutUs">
      <div
        className="AboutUsAccordionHeading"
        style={{ margin: "0 200px 0 200px" }}
      >
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="AboutUsAccordion" style={{ margin: "0 200px 0 200px" }}>
        <h4>Payment</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What forms of payment are accepted for renting a car?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Is a car rental deposit required?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Can I pay for the rental of a car for another individual?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Do you accept Cash or Money Orders?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h4>Preparation</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What steps are being taken to clean rental cars?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What is your pet policy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h4>Reservation</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What is the current car rental process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Can I modify, extend, or cancel my reservation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What are your renter requirements for renting in the US and
              Canada?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Morbi vel sapien egestas nisi ornare convallis at et urna. Morbi
              vulputate a tellus vitae lacinia. Sed fermentum justo non nunc
              commodo, eu commodo quam fermentum. Aliquam egestas maximus neque,
              at finibus lorem sollicitudin vel. Aenean nibh ante, vulputate ut
              velit eu, tristique rutrum nunc.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
