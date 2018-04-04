import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../component/app';
import Layout from '../component/layout';
import home from '../page/home';
import article from '../page/article';
const router = [
    {
        path: '/',
        title: '首页',
        component: home,
        exact: true,
    },
    {
        path: '/article/:id',
        title: '文章详情',
        component: article.Detail,
    },
];

/**
 * 渲染route路由
 */
const renderRouter = () => {
    let list = [];

    router.forEach(({
        path,
        title,
        component,
        ...resData,
    }, key) => {
        let route = <Route key={path} path={path} component={component} title={title} {...resData}/>

        // 是否包装布局(header && sidear)
        list.push(route);
    })
    return (
        <Switch>
            {list}
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
