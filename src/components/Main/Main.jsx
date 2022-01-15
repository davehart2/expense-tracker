import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { BudgetTrackerContext } from "../../context/context";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(BudgetTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Budget Tracker" subheader="With voice activation" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.3em", marginTop: "25px" }}
        >
          {/*InfoCard */} Try saying: Add Expense in category Pets of 100 on
          last Monday
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
