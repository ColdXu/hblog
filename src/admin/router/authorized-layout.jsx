/**
 * 授权模块路由
 * @author zhiyong.xu <zhiyong.xui@wenba100.com>
 * @since 2018-04-05 14:49:25
 */
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthorizedRoute from './authorized-route'
import Article from '../page/article';
import Home from '../page/home';
import Layout from '../component/layout';


export default function(props) {
    return (
        <div>
            <Layout {...props}/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/article" component={Article}/>
            </Switch>
        </div>
    )
}