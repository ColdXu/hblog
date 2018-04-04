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
    constructor(props) {
        super(props)
        this.handeClick =  this.handeClick.bind(this)
    }

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

    handeClick() {
        this.setState({name: new Date()})
    }

    handelA1 = () => {
        
    }

    handelA2 = () => {
        var headhtml = "<html><head><title></title></head><body>";
        var foothtml = "</body>"
        // 获取div中的html内容
        var newhtml = '<div>hahaha</div>'
        // 获取div中的html内容，jquery写法如下
        // var newhtml= $("#" + printpage).html();

        // 获取原来的窗口界面body的html内容，并保存起来
        var oldhtml = document.body.innerHTML;

        // 给窗口界面重新赋值，赋自己拼接起来的html内容
        document.body.innerHTML = headhtml + newhtml + foothtml;
        // 调用window.print方法打印新窗口
        window.print();

        // 将原来窗口body的html值回填展示
        document.body.innerHTML = oldhtml;
        return false;
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
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

