import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class history extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                history
            </div>
        )
    }
}

history.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(history);