import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

@withRouter
@connect(
    state => ({
        user: state.user
    })
)
export default class extends React.Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     if (!nextProps.user.auth || _.isEmpty(nextProps.user.info)) {
    //         this.props.history.push('/login');
    //     }
    // }

    render() {
        const { user, history, children } = this.props;

        return children
    }
}
