import { Grid, Typography, Button, TextField } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../../../common/util/history';
import Base from '../../../common/component/base';
import * as userApi from '../../../common/api/user';
import './index.less';

@connect(
    state => ({
        user: state.user,
    }),
)
class Home extends Base {
    constructor(props) {
        super(props);

        this.props.dispatch(
            {
                type: 'common/setHeader',
                payload: {
                    right: null,
                },
            });
    }

    render() {
        return (
            <div className="layout-primary" onClick={this.handleClick}>
                <div>
                    cold 欢迎回来
                </div>
            </div>
        );
    }
}

export default Home;
