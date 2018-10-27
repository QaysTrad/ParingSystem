import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});



class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                Add Student
            </div>
        )
    }
}

AddStudent.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddStudent);