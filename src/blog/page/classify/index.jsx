import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './home';
import Detail from './detail';

export default function({ match }) {
    return (
        <div className="layout-primary">
            <Switch>
                <Route path={`${match.path}/detail/:id`} key="preview" component={Detail}/>
                <Route path={`${match.path}`} component={Home}/>
            </Switch>
        </div>
    )
}