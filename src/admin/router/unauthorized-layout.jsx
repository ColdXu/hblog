/**
 * 不需要授权页面路由
 * @author zhiyong.xu <zhiyong.xui@wenba100.com>
 * @since 2018-04-05 14:49:56
 */
import { withRouter, Route, Redirect } from 'react-router-dom';
import Sso from '../page/sso';

export default function({ match }) {
    return (
        <div>
            <Route path={`${match.path}/login`} component={Sso.Login}/>
        </div>
    )
}