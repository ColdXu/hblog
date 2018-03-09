// import { withStyles } from 'material-ui/styles';
import { Grid, Typography, Button, TextField } from 'material-ui';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Delete from 'material-ui-icons/Delete';
import FileUpload from 'material-ui-icons/FileUpload';
import KeyboardVoice from 'material-ui-icons/KeyboardVoice';
import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';
import Send from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import './index.less';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    rightButtonIcon: {
        marginLeft: theme.spacing.unit * 2,
    },
    releaseButton: {
        marginLeft: theme.spacing.unit * 2,
        background: '#689F38',
    },
    iconSmall: {
      fontSize: 20,
    },
    textfield: {
        marginTop: -10,
    }
  });

  @withStyles(styles)
export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
        };
      }

    handleChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    handBack = () => {

    }

    handleSave = () => {
        const { title, content } = this.state;
        this.props.onSave({
            title,
            content,
        })
    }

    handleRelease = () => {

    }

    handleFieldChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        const { title, content } = this.state;
        const { classes } = this.props;
       
        return (
            <div className="article-createform">
                <div className="article-createform-btns">
                <Button
                    onClick={this.handleSave}
                    className={classes.rightButtonIcon}
                    raised={'true'}
                    color="primary"
                    variant="raised"
                    size="small">
                    保存
                    <Save className={classnames(classes.iconSmall, classes.rightIcon)} />
                </Button>
                <Button
                    onClick={this.handleRelease}
                    className={classes.releaseButton}
                    raised={'true'}
                    color="primary"
                    variant="raised"
                    size="small">
                    发布
                    <Send className={classnames(classes.iconSmall, classes.rightIcon)}/>
                    
                </Button>
                </div>
                <TextField
                    onChange={this.handleFieldChange}
                    value={title}
                    className={classes.textfield}
                    placeholder="请输入博文标题"
                    label="标题"
                    type="test"
                    name="title"
                    margin="normal"
                    fullWidth
                />
                <ReactQuill 
                    theme="snow"
                    value={content}
                    onChange={(val)=>{
                        this.setState({
                            content: val
                        })
                    }}
                    />
            </div>
        )
    }
}