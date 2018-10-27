import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});



class Pairing extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                Pairing
            </div>
        )
    }
}

Pairing.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Pairing);