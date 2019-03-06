import React from 'react';
import { Grid, Typography, Button, TextField } from 'material-ui';
import { connect } from 'react-redux';
import List from './component/list';

@connect(
    state => ({
        article: state.article,
    }),
)
class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(
            {
                type: 'common/setHeader',
                payload: {
                    right: null,
                },
            });
        this.props.dispatch({ type: 'article/getAdminArticleList' });
    }

    handleEdit = (id) => {
        this.props.history.push(`/article/create/${id}`);
    }

    handleRelease = (item) => {
        this.props.dispatch({ type: 'article/putAdminArticleStatus',
            payload: {
                id: item.id,
                status: item.status === 'edit' ? 'publish' : 'edit',
            } });
    }

    render() {
        const { article } = this.props;
        return (
            <div>
                <List
                    onRelease={this.handleRelease}
                    onEdit={this.handleEdit}
                    data={article.articleList}
                />
            </div>
        );
    }
}
export default ListPage;
