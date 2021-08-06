import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";

//icons
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import BusinessIcon from "@material-ui/icons/Business";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    padding: "0",
    margin: "10x",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "30vh" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          xl={3}
          align="right"
          className={classes.test}
        >
          <Box>
            <Card className={classes.gridItems}>
              <Box>
                <iframe
                  style={{ height: "300px", width: "600px" }}
                  title="Last Stop Pot Shop"
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d342517.6548679741!2d-122.13525555643028!3d47.8798920031171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d47.926476799999996!2d-122.0640768!4m5!1s0x549abda07f99a3cb%3A0x7c079f31c1c2ba9a!2slast%20stop%20pot%20shop%20map!3m2!1d47.8433132!2d-121.67358449999999!5e0!3m2!1sen!2sus!4v1628273652883!5m2!1sen!2sus"
                ></iframe>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          xl={2}
          align="center"
          className={classes.gridItems}
        >
          <Box>
            <Box>
              <BusinessIcon />
              <Typography>41711 US-2 Bldg 1,</Typography>
              <Typography> Gold Bar, WA 98251</Typography>
            </Box>
            <br />
            <Box>
              <PhoneEnabledIcon />
              <Typography>425 344 0595</Typography>
            </Box>
            <br />
            <Box>
              <AccessAlarmsIcon />
              <Typography>Sunday - Thursday 8am - 10pm </Typography>
              <Typography>Saturday - Sunday 8am - 11pm</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
