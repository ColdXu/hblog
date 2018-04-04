
import { withRouter, Route, Redirect } from 'react-router-dom';
import Sso from '../page/sso';

export default function({ match }) {
    return (
        <div>
            <Route path={`${match.path}/login`} component={Sso.Login}/>
        </div>
    )
}