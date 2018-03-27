import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import reactDom from 'react-router-redux';
import App from '../component/app';
import Layout from '../component/layout';
import Auth from '../component/auth';
import Home from '../page/home';
import Sso from '../page/sso';
import Article from '../page/article';

const router = [
    {
        path: '/',
        title: '首页',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        title: '登录',
        component: Sso.Login,
        layout: false,
        auth: false,
    },
    {
        path: '/article',
        exact: true,
        title: '博文列表',
        component: Article.List,
    },
    {
        path: '/article/create/:id',
        title: '创建',
        component: Article.Create,
    },
    {
        path: '/article/create',
        title: '创建',
        exact: true,
        component: Article.Create,
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
        layout = true,
        auth = true,
        ...resData,
    }, key) => {
        let route = <Route key={path} path={path} component={component} title={title} {...resData}/>

        if (auth) {
            route = <Auth key={path}>{route}</Auth>
        }

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
        <BrowserRouter>
            <App>
                {renderRouter()}
            </App>
        </BrowserRouter>
    )
}
