import { Grid, Typography, Button, TextField } from 'material-ui'
import { addTest } from '../../store/user/action'
import { connect } from 'react-redux'
import * as userAction from '../../store/user/action';
import { bindActionCreators } from 'redux';
import './index.less';

class Login extends React.Component {
    state = {
        username: '', 
        password: ''
    }

    handleChangeFiles = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { username, password } = this.state;
        this.props.actions.login({
            username,
            password
        })
    }

    render() {
        console.log('nihao')
        const { state } = this;
        return (
            <div className="p-sso-login">
                <div className="content">
                    <Grid container spacing={24} justify="center">
                        <Grid className="grid" item xs={11} sm={7} md={5} >
                            <div className="f-text-center">
                                <Typography type="title" gutterBottom>登录</Typography>
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
                                raised 
                                color="primary"
                                onClick={this.handleSubmit}>
                                登1录
                            </Button>
                            {this.props.user.info.code !== 0 && this.props.user.info.message}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        actions: bindActionCreators({
            addTest,
            ...userAction
        }, dispatch)
    })
)(Login)