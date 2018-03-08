import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import history from '../../../common/util/history'
import './index.less';

@connect(
    state => ({
        user: state.user
    }),
)
export default class extends React.Component {
    state = {
        username: '', 
        password: ''
    }

    handleChangeFiles = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e)  => {
        const { username, password } = this.state;
        this.props.dispatch({type: 'user/login', payload: {
            username,
            password
        }})
    }
    
    render() {
        const { state } = this;
        return (
            <div className="p-sso-login">
                <div className="content">
                    <Grid container spacing={24} justify="center">
                        <Grid className="grid" item xs={11} sm={7} md={5} >
                            <div className="f-text-center">
                                <Typography variant="title">LOGIN</Typography>
                                <Typography variant="caption">登录</Typography>
                            </div>
                            <TextField
                                className="input"
                                placeholder="请输入用户名"
                                label="用户名"
                                name="username"
                                value={state.username}
                                onChange={this.handleChangeFiles}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                className="input"
                                placeholder="请输入密码"
                                label="密码"
                                type="password"
                                name="password"
                                value={state.password}
                                onChange={this.handleChangeFiles}
                                margin="normal"
                                fullWidth
                            />
                            <Button 
                                className="submit f-btn-inline" 
                                raised={'true'}
                                color="primary"
                                variant="raised"
                                onClick={this.handleSubmit}>
                                登录
                            </Button>
                            {this.props.user.info.code !== 0 && this.props.user.info.message}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

