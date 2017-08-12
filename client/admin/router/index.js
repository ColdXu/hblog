import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../component/App';
import Home from '../page/home';
import Sso from '../page/sso';

export default function () {
    return (
        <HashRouter>
            <Switch component={App}>
                <Route path="/" component={Home}></Route>
                <Route path="sso" component={Sso}></Route>
            </Switch>
        </HashRouter>
    )
}