import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import CreateForm from './component/create-form';

@withRouter
@connect(
    state => ({
        article: state.article
    }),
)

export default class extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.match.params.id) {
            this.props.dispatch({type: 'article/getAdminArticle', payload: {id: this.props.match.params.id}})
        }

        this.state = {
            formData: {
                title: '',
                content: ''
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.formData.title && !this.state.formData.content && !_.isEmpty(nextProps.article.data)) {
            this.setState({
                formData: {
                    title: nextProps.article.data.title,
                    content: nextProps.article.data.content,
                }
            })
        }
    }

    handleSave = (type) => {
        const { title, content } = this.state.formData;

        const data = {
            title,
            content,
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