import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const Level = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
    {
        value: '5',
        label: '5',
    },
];

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }, level: {
        width: 300,
    },
});



class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: '',
            level: '1',
            students: []
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    addStudent = () => {
        axios.post('/addStu', { studentName: this.state.studentName, studentLevel: this.state.level })
            .then(() => {
                console.log("done")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() {
        axios.get('/getStu')
            .then(data => {
                this.setState({
                    students: data.data,
                })
            }).catch(err => {
                console.log(err)
            })
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid style={{ marginBottom: "2%", marginTop: "3%" }}>
                    <Button variant="contained" style={{
                        backgroundColor: "#373640",
                        left: "20%",
                        width: "100px",
                        color: "white"
                    }}>
                        Back
                </Button>
                </Grid>
                <Grid container direction="row" justify="space-evenly" style={{
                    top: "20%",
                    backgroundColor: "#00e0ff",
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Grid item >
                        <TextField
                            label="Full Name"
                            placeholder="Full Name"
                            type="text"
                            name="studentName"
                            className={classes.textField}
                            margin="normal"
                            onChange={this.onChange}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            id="Standar Level"
                            select
                            label="Level (1-5)"
                            className={classes.textField}
                            value={this.state.level}
                            onChange={this.handleChange('level')}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.level,
                                },
                            }}
                            helperText="Please select your level"
                            margin="normal"
                        >
                            {Level.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item >
                        <Button onClick={this.addStudent} style={{
                            height: "50px",
                            width: "150px",
                            backgroundColor: "#5cb85c",
                            borderRadius: '45px',
                            color: "white",
                            margin: "20px",
                            backgroundColor: "#494949"
                        }} > Add </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

AddStudent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddStudent);