import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import moment from 'moment';
import Base from '../../../common/component/base';
import history from '../../../common/util/history'
import { getMedia } from '../../../common/util/media'
import Show from '../../../common/component/markdown/show';
import Tag from '../../component/tag';
import './detail.less';

@connect(
    state => ({
        article: state.article
    }),
)

export default class extends Base {
    constructor(props) {
        super(props)
        this.props.dispatch({type: 'article/getArticle', payload: {id: this.props.match.params.id}})
    }

    componentWillUnmount() {
        this.props.dispatch({type: 'article/getArticle/success', payload: {data: {}}})
    }

    render() {
        const { article } = this.props.article;
        return (
            <div className="p-article-detail">
                <div className="p-article-detail-box">
                    {article.coverId &&
                        <img src={getMedia(article.coverId)} className="p-article-cover"/ >
                    }
                    <h1 className="p-article-detail-title">
                        {article.title}
                    </h1>
                    <div className="p-article-detail-describe">
                        <div>
                            发表于 {moment(article.publishDate).format('YY年MM月DD日')}
                        </div>
                        <span className="p-article-detail-describe-line">
                            |
                        </span>
                        <div >
                            浏览 {article.pv}
                        </div>
                        <span className="p-article-detail-describe-line">
                            |
                        </span>
                        <div>
                            分类于 <Tag className="p-article-detail-describe-tag">{article.tagName}</Tag>
                        </div>
                    </div>
                    <Show value={article.content}></Show>
                </div>
            </div>
        )
    }
}