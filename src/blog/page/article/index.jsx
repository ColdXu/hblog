import { Route, Redirect, Switch } from 'react-router-dom';
import Detail from './detail';

export default function({ match }) {
    return (
        <div className="layout-primary">
            <Switch>
                <Route path={`${match.path}/:id`} key="preview" component={Detail}/>
            </Switch>
        </div>
    )
}