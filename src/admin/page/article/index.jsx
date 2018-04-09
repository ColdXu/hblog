import { Route, Redirect, Switch } from 'react-router-dom';
import Create from './create';
import List from './list';

export default function({ match }) {
    console.log('match', match)
    return (
        <div className="layout-primary">
            <Switch>
                <Route path={`${match.path}/create/:id`} key="edit" component={Create}/>
                <Route path={`${match.path}/create`} key="add" component={Create}/>
                <Route path={`${match.path}`} component={List}/>
            </Switch>
        </div>
    )
}