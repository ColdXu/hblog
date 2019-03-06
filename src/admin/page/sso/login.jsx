// import { Grid, Typography, Button, TextField } from 'material-ui'
import {Input, Form, Button, Icon }  from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import history from '../../../common/util/history'
import './index.less';

@connect(
    state => ({
        user: state.user
    }),
)
@Form.create()
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.handeClick =  this.handeClick.bind(this);
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
        e.preventDefault();
        const { username, password } = this.state;

        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
        // this.props.dispatch({type: 'user/login', payload: {
        //     username,
        //     password
        // }})
    }

    handeClick() {
        this.setState({name: new Date()})
    }

    render() {
        const { state } = this;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="p-sso-login">
                <div className="content">
                <div className="grid">
                <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </Form.Item>
                  <Button 
                    block
                    type="primary" size="large" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
              </Form>
              </div>
                </div>
            </div>
        )
    }
}

