import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../component/app';
import Layout from '../component/layout';

import Home from '../page/home';
import Article from '../page/article';
import Classify from '../page/classify';

/**
 * 渲染route路由
 */
const renderRouter = () => {
    return (
        <App>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/article" component={Article}/>
                    <Route path="/classify" component={Classify}/>
                </Switch>
            </Layout>
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
