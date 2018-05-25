import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import Save from 'material-ui-icons/Save';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import Base from '../../../common/component/base';
import CreateForm from './component/create-form';
const styles = theme => ({
    icon: {
      color: '#fff',
    },
  });
@connect(
    state => ({
        article: state.article,
        user: state.user,
    }),
)
@withStyles(styles)
export default class extends Base {
    constructor(props) {
        super(props);

        // 设置菜单栏右侧
        this.props.dispatch(
            {
            type: 'common/setHeader', 
            payload: {
                right: (
                    <Tooltip id="tooltip-icon" title=" 保存">
                        <IconButton aria-label=" 保存">
                            <Save onClick={() => this.handleSave('save')} className={this.props.classes.icon}/>
                        </IconButton>
                    </Tooltip>
                )
            }
        })

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
        return (
            <CreateForm
                tagsOptions={this.props.user.info.tags}
                onChange={this.handleChange}
                data={this.state.formData}
                />
        )
    }
}