import { Grid, Typography, Button, TextField } from 'material-ui'
import { addTest } from '../../store/user/action'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import './index.css';

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

    handleSubmit = () => {
        this.props.actions.addTest('nihao')
    }

    render() {
        const { state } = this;
        return (
            <div className="p-sso-login">
                <div className="p-sso-login-content">
                    <Grid container spacing={24} justify="center">
                        <Grid className="p-sso-login-grid" item xs={11} sm={7} md={5} >
                            <div className="f-text-center">
                                <Typography type="title" gutterBottom>Cold博客登录{this.props.test.test}</Typography>
                            </div>
                            <TextField
                                className="p-sso-login-input"
                                placeholder="请输入用户名"
                                label="用户名"
                                name="username"
                                value={state.username}
                                onChange={this.handleChangeFiles}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                className="p-sso-login-input"
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
                                className="p-sso-login-submit f-btn-inline" 
                                raised 
                                color="primary"
                                onClick={this.handleSubmit}>
                                登录
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
            test: state.test
    }),
    dispatch => ({
        actions: bindActionCreators({
            addTest,
        }, dispatch)
    })
)(Login)