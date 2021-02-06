import { useRouter } from "next/router";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Country = () => {
  const classes = useStyles();
  const router = useRouter();
  const { alpha3Code } = router.query;
  const [countryData, setCountryData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [countryLatestData, setCountryLatestData] = React.useState([]);


  console.log(countryData);
  console.log(countryLatestData[0]);
  console.log("iso : " + countryLatestData[0]);
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Coronavirus (COVID-19) Vaccinations in {alpha3Code}
        </Typography>

        {countryLatestData.length == 0 ? (
          <Typography variant="h4" component="h1" gutterBottom>
            No Data
          </Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Date
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    ISO code
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].iso_code}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Location
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Total vaccinations
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={countryLatestData[0].total_vaccinations}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="h6" gutterBottom>
                in-depth
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Daily vaccinations
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={countryLatestData[0].daily_vaccinations}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Daily vaccinations per million
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={
                        countryLatestData[0].daily_vaccinations_per_million
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Daily vaccinations raw
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={countryLatestData[0].daily_vaccinations_raw}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    People fully vaccinated
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={countryLatestData[0].people_fully_vaccinated}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    People fully vaccinated per hundred
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].people_fully_vaccinated_per_hundred}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    People vaccinated
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <NumberFormat
                      value={countryLatestData[0].people_vaccinated}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    People vaccinated per hundred
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].people_vaccinated_per_hundred}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Total vaccinations per hundred
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {countryLatestData[0].total_vaccinations_per_hundred}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="h6" gutterBottom>
                All data 
              </Typography>
            </Grid>

          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Country;
