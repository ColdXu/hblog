import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import history from '../../../common/util/history'
import Base from '../../../common/component/base'
import * as userApi from '../../../common/api/user'
import './index.less';

async function test (haha) {
    console.log(haha)
}

@connect(
    state => ({
        user: state.user
    }),
    (dispatch) => {
        return { actions: bindActionCreators({test}, dispatch) }
    }
)
export default class extends Base {

    constructor(props) {
        super(props)
        console.log(this)
    }

    handleClick = () => {
        // history.push('login')
        this.props.actions.test(123)
    }
    render() {
        console.log(this.props)
        return (<div className="layout-primary" onClick={this.handleClick}>
                <div >fsafsdfds</div>
            </div>)
    }
}