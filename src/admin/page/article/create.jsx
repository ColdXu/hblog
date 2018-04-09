import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import Base from '../../../common/component/base';
import CreateForm from './component/create-form';

@connect(
    state => ({
        article: state.article,
        user: state.user,
    }),
)

export default class extends Base {

    constructor(props) {
        super(props);
        
        if (this.props.match.params.id) {
            this.props.dispatch({type: 'article/getAdminArticle', payload: {id: this.props.match.params.id}})
        } else {
            this.props.dispatch({type: 'article/clearArticle'})
        }

        this.state = {formData: {...this.props.article.data}};
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.article.data, nextProps.article.data)) {
            this.setState({
                formData: {
                    ...nextProps.article.data,
                }
            }) 
        }
    }

    handleSave = (type) => {
        const data = {
            ...this.state.formData
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
        console.log(this.props)
        return (
            <CreateForm
                tagsOptions={this.props.user.info.tags}
                onChange={this.handleChange}
                data={this.state.formData}
                onRelease={() => this.handleSave('release')}
                onSave={() => this.handleSave('save')}/>
        )
    }
}