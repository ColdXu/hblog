import { connect } from 'react-redux'
import Base from '../../../common/component/base';
@connect(
    state => ({
        user: state.user
    })
)
export default class extends Base {

    componentWillMount() {
        if (!this.props.user.auth && !_.isEmpty(this.props.user.info)) {
            this.history.push('/login');
        }
    }

    render() {
        const { user, children } = this.props;

        return children
    }
}
