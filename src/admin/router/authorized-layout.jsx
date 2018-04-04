import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { blue } from 'material-ui/colors';
import Layout from '../component/layout';


import Home from '../page/home';
import Sso from '../page/sso';
import Article from '../page/article';


export default function({ match }) {
    return (
        <Layout>
            <Route path={`${match.path}article/create/:id`} component={Article.Create}/>
            <Route path={`${match.path}article/create`} exact component={Article.Create}/>
            <Route path={`${match.path}article`} component={Article.List}/>
        </Layout>
    )
}