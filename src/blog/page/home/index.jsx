import { Grid, Typography, Button, TextField } from 'material-ui';
import { connect } from 'react-redux';
import List from './component/list';
import Me from './component/me';

import './index.less';

@connect(
    state => ({
        article: state.article,
        user: state.user,
    }),
)
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch({type: 'article/getArticleList'});
    }

    render() {
        const { article: {articleList}, user: {info} } = this.props;
        return (
            <div className="p-home">
                <div className="p-home-leftbox">
                    <List data={articleList}/>
                </div>
            </div>
        )
    }
}