import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import UnauthorizedLayout from './unauthorized-layout';
import AuthorizedLayout from './authorized-layout';
import AuthorizedRoute from './authorized-route'

import reactDom from 'react-router-redux';
import App from '../component/app';
import Layout from '../component/layout';
import Home from '../page/home';
import Sso from '../page/sso';
import Article from '../page/article';
/**
 * 渲染route路由
 */
const renderRouter = () => {
    return (
        <Switch>
            <Route path="/auth" component={UnauthorizedLayout}/>
            <Layout/>
            <AuthorizedRoute path="/" exact component={Home}/>
            <AuthorizedRoute path="/article" component={Article}/>
            <Redirect to="/" />
        </Switch>
    )
}

export default function () {
    return (
        <HashRouter>
            <App>
                {renderRouter()}
            </App>
        </HashRouter>
    )
}
