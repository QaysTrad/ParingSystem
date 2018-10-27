import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        left: "40%",
        top: "40%",
        padding: "150px"
    },
    Card: {
        backgroundColor: "#494949",
    },
    Button: {
        color: "white",
        height: "70px",
        width: "200px",
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container direction="column" justify="space-evenly" alignItems="center" >
                    <Grid item>
                        <Card className={classes.Card}>
                            <Link to="/addStudent" style={{ color: "white" }}>
                                <Button className={classes.Button}>
                                    ADD STUDENT
                            </Button>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item>
                        <br />
                    </Grid>
                    <Grid item>
                        <Card className={classes.Card}>
                            <Link to="/pairing" style={{ color: "white" }}>
                                <Button className={classes.Button}>
                                    PARING
                            </Button>
                            </Link>
                        </Card>
                    </Grid>
                    <Grid item>
                        <br />
                    </Grid>
                    <Grid item>
                        <Card className={classes.Card}>
                            <Link to="/history" style={{ color: "white" }}>
                                <Button className={classes.Button}>
                                    history
                            </Button>
                            </Link>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);


