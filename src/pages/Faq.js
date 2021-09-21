import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import { ExpandMore } from "@material-ui/icons";
import Header from "../components/Header";
import "./css/main.css";

export default function Faq() {
  return (
    <div className="top-offset AboutUs">
      <Header pageName="Home" />

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
            <Typography>
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
            <Typography>Is a car rental deposit required?</Typography>
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
            <Typography>
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
            <Typography>Do you accept Cash or Money Orders?</Typography>
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
            <Typography>
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
            <Typography>What is your pet policy?</Typography>
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
            <Typography>What is the current car rental process?</Typography>
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
            <Typography>
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
            <Typography>
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
