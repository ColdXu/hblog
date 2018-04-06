import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import Base from '../../../common/component/base';
import CreateForm from './component/create-form';

@connect(
    state => ({
        article: state.article
    }),
)

export default class extends Base {

    constructor(props) {
        super(props);
        this.props.dispatch({type: 'article/clearArticle'})
        if (this.props.match.params.id) {
            this.props.dispatch({type: 'article/getAdminArticle', payload: {id: this.props.match.params.id}})
        }
        this.state = {
            formData: this.props.article.data
        }
        this.props.dispatch({type: 'article/clearArticle'})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            formData: {
                ...nextProps.article.data,
            }
        })
    }

    handleSave = (type) => {
        const { title, content, coverId } = this.state.formData;

        const data = {
            title,
            content,
            coverId,
        }
        data.status = type === 'release' ? 'publish' : 'edit';

        if (this.props.match.params.id) {
            this.props.dispatch({type: 'article/putAdminArticle', payload: {
                id: this.props.match.params.id,
                ...data
            }})
        } else {
            this.props.dispatch({type: 'article/createAdminArticle', payload: data})
        }
    }

    handleChange = (name, value) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value,
            }
        })
    }

    render() {
        return (
            <CreateForm
                onChange={this.handleChange}
                data={this.state.formData}
                onRelease={() => this.handleSave('release')}
                onSave={() => this.handleSave('save')}/>
        )
    }
}