import { Route, Redirect } from 'react-router-dom';
import Create from './create';
import List from './list';

export default function({ match }) {
    return (
        <div className="layout-primary">
            <Route path={`${match.path}article/create/:id`} component={Create}/>
            <Route path={`${match.path}article/create`} exact component={Create}/>
            <Route path={`${match.path}article`} component={List}/>
        </div>
    )
}