import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead
} from '@material-ui/core';

import axios from 'axios';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        width: "100%"
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
    },
});

class Pairing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [],
        }
    }
    componentDidMount() {
        axios.get('/getStu')
            .then(res => {
                console.log(res)
                this.setState({
                    students: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
    render() {
        const { classes } = this.props;
        const s1 = this.state.students.map(row => {
            return (
                <TableRow className={this.props.classes.row} >
                    <CustomTableCell component="th" scope="row">
                        {row.studentName}
                    </CustomTableCell>
                </TableRow>
            )
        })
        return (
            <Grid container direction='column' >
                <Grid style={{ marginBottom: "2%", marginTop: "3%", marginLeft: "-20%" }}>
                    <a href='/'>
                        <Button variant="contained" style={{
                            backgroundColor: "#373640",
                            left: "20%",
                            width: "100px",
                            color: "white"
                        }}>
                            Back
                </Button>
                    </a>
                </Grid>
                <Grid container justify="space-around" style={{
                    top: "20%",
                }}>
                    <Grid item >
                        <Button style={{
                            height: "50px",
                            width: "200px",
                            backgroundColor: "#2CDC29",
                            borderRadius: '25px',
                            color: "white",
                            marginTop: "20%",
                            marginLeft: "30%"
                        }} onClick={this.pairing}>
                            Pairing
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button style={{
                            height: "50px",
                            width: "200px",
                            backgroundColor: "#2CDC29",
                            borderRadius: '25px',
                            color: "white",
                            marginTop: "20%",
                            marginRight: "40%",
                        }} onClick={this.saveStudent}>
                            Save
                            </Button>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container justify='space-evenly'>
                        <Grid item>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Student1</TableCell>
                                            <TableCell> Student2 </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell>{s1}</TableCell>
                                        <TableCell>s2</TableCell>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Pairing.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Pairing);