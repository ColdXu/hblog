/**
 * 用户登录授权
 * @author zhiyong.xu <zhiyong.xui@wenba100.com>
 * @since 2018-03-29 15:52:44
 */

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

@connect(state => ({
    user: state.user
}))

export default class extends React.Component {
    componentWillMount() {
        if (!this.props.user.info) {
            this.props.dispatch({type: 'user/getUserInfo'})
        }
    }

    render() {
        const { component: Component, user, ...rest } = this.props
        return (
            <Route {...rest} render={(props) => {
                if (!user.info) {
                    return <div>Loading</div>;
                }
                return user.auth ? <Component {...props}/> : <Redirect to="/auth/login" />
            }}/>
        )
    }
}