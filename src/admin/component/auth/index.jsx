import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

@withRouter
@connect(
    state => ({
        auth: state.auth
    })
)

export default class extends React.Component {

    componentWillMount() {
        if (!this.props.auth.auth) {
            this.props.history.push('/login');
        }
    }
    render() {
        const { user, history } = this.props;

        return (
            <div>
                <div>123123</div>
            </div>
        )
    }
}
