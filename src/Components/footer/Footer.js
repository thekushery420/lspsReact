import React from "react";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import { Link } from "@material-ui/core";

import lspsLogo from "../../Assets/lspsLogo.jpg";

function Footer(props) {
  //getting external style page
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="black" min-height="200px auto">
        <Container>
          <Grid className={classes.footer_grid} container>
            <Grid item xs={12} sm={12} md={8}>
              <ul className={classes.footer_ul}>
                <li className={classes.footer_li}>
                  <Link className={classes.footer_link} href="/">
                    Home
                  </Link>
                </li>
                <li className={classes.footer_li}>
                  <Link className={classes.footer_link} href="/rewards">
                    Rewards
                  </Link>
                </li>
                <li className={classes.footer_li}>
                  <Link className={classes.footer_link} href="/OrderOnline">
                    Order Online
                  </Link>
                </li>
              </ul>
            </Grid>
            <p className={classes.footer_disclaimer}>
              Cannabis can impair concentration, coordination, and judgment. Do
              not operate a vehicle or machinery under the influence of this
              drug. This product has intoxicating effects and may be habit
              forming. There may be health risks associated with consumption of
              this product. For use only by adults twenty-one and older. Keep
              out of the reach of children.
            </p>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
