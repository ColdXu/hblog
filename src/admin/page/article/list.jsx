import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import List from './component/list';

@connect(
    state => ({
        article: state.article
    }),
)
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch({type: 'article/getAdminArticleList'})
    }

    handleEdit = (id) => {
        this.props.history.push(`/article/create/${id}`)
    }

    render() {
        const { article } = this.props;
        return (
            <div>
                <List 
                    onEdit={this.handleEdit}
                    data={article.articleList}/>
            </div>)
    }
}