import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import history from '../../../common/util/history'
import Base from '../../../common/component/base'
import './index.less';

@connect(
    state => ({
        user: state.user
    }),
)
export default class extends Base {

    handleClick = () => {
        history.push('login')
    }
    render() {
        return (<div>
                <div onClick={this.handleClick}>hkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkkohkko</div>
            </div>)
    }
}