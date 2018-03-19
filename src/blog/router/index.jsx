import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../component/app';
import Layout from '../component/layout';
import Home from '../page/home';

const router = [
    {
        path: '/home',
        title: '首页',
        component: Home,
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
            <Layout>{list}</Layout>
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
