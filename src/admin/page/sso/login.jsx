import React from 'react';
import { Input, Form, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import './index.less';

@connect(
    state => ({
        user: state.user,
    }),
)
class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch({ type: 'user/login',
                    payload: {
                        username: values.username,
                        password: values.password,
                    } });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="p-sso-login">
                <div className="content">
                    <div className="grid">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: '请输入用户名',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: '请输入密码',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                    />,
                                )}
                            </Form.Item>
                            <Button
                                block
                                type="primary"
                                size="large"
                                htmlType="submit"
                                className="login-form-button"
                            >
                    登录
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);
