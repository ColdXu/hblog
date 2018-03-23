import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import moment from 'moment';
import Content from '../../component/content';
import Base from '../../../common/component/base';
import history from '../../../common/util/history'
// import List from './component/list'
import './detail.less';

@connect(
    state => ({
        article: state.article
    }),
)

export default class extends Base {
    constructor(props) {
        super(props)
        this.props.dispatch({type: 'article/getArticle', payload: {id: this.history.location.params.id}})
    }

    render() {
        const { article } = this.props.article;
        return (
            <div className="p-article-detail">
                <div className="p-article-detail-box">
                    <h1 className="p-article-detail-title">
                        {article.title}
                    </h1>
                    <div className="p-article-detail-describe">
                        <span>{moment(article.publishDate).format('YY年MM月DD日 HH:mm')}</span>
                        <span>浏览 {article.pv}</span>
                    </div>
                    <Content className="p-article-detail-content" value={article.content}></Content>
                </div>
            </div>
        )
    }
}