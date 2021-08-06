import React from "react";
import { Grid } from "@material-ui/core";

function OrderOnline() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          <iframe
            style={{ height: "95vh", width: "99vw" }}
            src="https://www.iheartjane.com/stores/2621/last-stop-pot-shop"
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderOnline;
