import { Snackbar } from 'material-ui'
import ReactDOM from 'react-dom';
import { withStyles } from 'material-ui/styles';
import {blue, orange} from 'material-ui/colors';

function message(text, time, status) {
    const div = document.createElement('div');
    document.body.appendChild(div)
    const handleClose = function() {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }
    ReactDOM.render(
        <Snack text={text} time={time} status={status} onClose={handleClose}/>,
    div);
}


message.success = function(text = 'hello', time = 3000) {
    message(text, time, 'success')
}

message.error = function(text = 'hello', time = 3000) {
    message(text, time, 'error')
}

const styles = {
    success: {
      background: blue[500]
    },

    error: {
        background: orange[500]
    }
};
@withStyles(styles)
class Snack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        return(
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                SnackbarContentProps={{
                'aria-describedby': 'message-id',
                // className: this.props.classes[this.props.status]
                }}
                open={this.state.open}
                autoHideDuration={this.props.time}
                onClose={this.handleClose}
                onExited={() => this.props.onClose()}
                message={<span id="message-id">{this.props.text}</span>}
            />
        )
    }
}

export default message;