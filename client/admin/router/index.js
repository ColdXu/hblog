import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import App from '../component/App';
import Home from '../page/home';
import Sso from '../page/sso';

export default function () {
    return (
        <HashRouter>
            <App>
                <Route exact path='/' component={Home}/>
                <Route path='/sso' component={Sso}/>
            </App>
        </HashRouter>
    )
}