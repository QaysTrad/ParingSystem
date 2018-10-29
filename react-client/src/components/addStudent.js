import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Modal,
    Typography
} from '@material-ui/core';

import axios from 'axios';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    level: {
        width: 300,
    },
    table: {
        minWidth: 1000,
        marginBottom: "10%",
        marginTop: "3%"
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});



class AddStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentName: '',
            level: '1',
            students: [],
            open: false,
            id1: '',
            updateLevel: '1'
        }
    }
    updatedLevel = () => {
        axios.post('/updateStu', { _id: this.state.id1, studentLevel: this.state.updateLevel })
            .then(() => {
                alert('Updated');
                window.location.reload();
            })
            .catch((err) => {
                console.log('err', err);
            })
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
    updateChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    addStudent = () => {
        axios.post('/addStu', { studentName: this.state.studentName, studentLevel: this.state.level })
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }
    edit = (id) => {
        this.setState({
            id1: id,
            open: true
        });
    }
    handleClose = () => {
        this.setState({ open: false });
    };
    deleteStudent(id) {
        axios.post('/deleteStu', { _id: id })
            .then(() => {
                alert('Deleted');
                window.location.reload();
            })
            .catch((err) => {
                console.log('err', err);
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
                <Grid container direction="row" justify="space-evenly" style={{
                    top: "20%",
                    backgroundColor: "#00e0ff",
                    marginLeft: "10%",
                    marginRight: "10%"
                }}>
                    <Grid item >
                        <TextField
                            label="Full Name"
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
                    <Grid container justify="space-evenly">
                        <Grid item>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <CustomTableCell>NAME</CustomTableCell>
                                            <CustomTableCell >LEVEL</CustomTableCell>
                                            <CustomTableCell > ...  </CustomTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.students.map(row => {
                                            return (
                                                <TableRow className={classes.row} key={row._id} >
                                                    <CustomTableCell component="th" scope="row">
                                                        {row.studentName}
                                                    </CustomTableCell>
                                                    <CustomTableCell numeric>
                                                        {row.studentLevel}
                                                    </CustomTableCell>
                                                    <Button style={{
                                                        backgroundColor: "#D8B94D",
                                                        borderRadius: '25px',
                                                        color: "white",
                                                        margin: "20px"
                                                    }} onClick={() => this.edit(row._id)}>Edit</Button>

                                                    <Button onClick={() => this.deleteStudent(row._id)} style={{
                                                        backgroundColor: "#DA2525",
                                                        borderRadius: '25px',
                                                        color: "white",
                                                        margin: "20px"
                                                    }}>Delete</Button>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div style={getModalStyle()} className={classes.paper}>
                            <Typography variant="h6" id="modal-title">
                                Update Level
                             </Typography>
                            <Grid item >
                                <TextField
                                    id="Standar Level"
                                    select
                                    label="Level (1-5)"
                                    className={classes.textField}
                                    value={this.state.updateLevel}
                                    onChange={this.updateChange('updateLevel')}
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
                            <Grid item>
                                <Button onClick={this.updatedLevel}
                                    style={{
                                        backgroundColor: "#5B5B5B",
                                        borderRadius: '25px',
                                        color: "white",
                                        margin: "20px"
                                    }}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </div>
                    </Modal>
                </Grid>
            </Grid>
        )
    }
}

AddStudent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddStudent);