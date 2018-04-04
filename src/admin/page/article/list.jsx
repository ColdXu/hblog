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

    handleRelease = (item) => {
        this.props.dispatch({type: 'article/putAdminArticleStatus', payload: {
            id: item.id,
            status: item.status === 'edit' ? 'publish' : 'edit',
        }})
    }

    render() {
        console.log('article')
        const { article } = this.props;
        return (
            <div>
                <List
                    onRelease={this.handleRelease}
                    onEdit={this.handleEdit}
                    data={article.articleList}/>
            </div>)
    }
}