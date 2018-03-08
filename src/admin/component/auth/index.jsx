import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

@withRouter
@connect(
    state => ({
        user: state.user
    })
)
export default class extends React.Component {

    componentWillMount() {
        if (!this.props.user.auth && !_.isEmpty(this.props.user.info)) {
            this.props.history.push('/login');
        }
    }

    render() {
        const { user, history, children } = this.props;

        return children
    }
}
