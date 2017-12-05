import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../component/app';
import Layout from '../component/layout';
import Home from '../page/home';
import Sso from '../page/sso';

const router = [
    {
        path: '/',
        title: '首页',
        component: Home,
    },
    {
        path: '/login',
        title: '登录',
        component: Sso.Login,
        layout: false,
    },
];


/**
 * 渲染route路由
 */
const renderRouter = () => {
    let layoutList = [];
    let notLayoutList = [];

    router.forEach(({
        path,
        title,
        component,
        layout = true
    }, key) => {
        let route = <Route key={key} path={path} component={component} title={title} />

        // 是否包装布局(header && sidear)
        if (layout) {
            layoutList.push(route);
        } else {
            notLayoutList.push(route);
        }
    })

    return (
        <Switch>
            {notLayoutList}
            <Layout>{layoutList}</Layout>
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