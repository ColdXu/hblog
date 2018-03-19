import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import history from '../../../common/util/history'
import List from './component/list'
import './index.less';

@connect(
    state => ({
        article: state.article
    }),
)

export default class extends React.Component {
    constructor(props) {
        super(props)
        // this.props.dispatch({type: 'article/getArticleList'})
    }

    render() {
        // const { articleList } = this.props.article;
        console.log(this);
        console.log('hook')
        return (
            <div className="p-home">
               
            </div>
        )
    }
}