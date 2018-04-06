import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import UnauthorizedLayout from './unauthorized-layout';
import AuthorizedLayout from './authorized-layout';
import AuthorizedRoute from './authorized-route'
import reactDom from 'react-router-redux';
import App from '../component/app';
import Layout from '../component/layout';

import Sso from '../page/sso';
/**
 * 渲染route路由
 */
const renderRouter = () => {
    return (
        <App>
            <Switch>
                <Route path="/auth" component={UnauthorizedLayout}/>
                <AuthorizedRoute path="/" component={AuthorizedLayout}/>
            </Switch>
        </App>
    )
}

export default function () {
    return (
        <HashRouter>
            {renderRouter()}
        </HashRouter>
    )
}
