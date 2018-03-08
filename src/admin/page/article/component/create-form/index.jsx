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
    iconSmall: {
      fontSize: 20,
    },
  });

  @withStyles(styles)
export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            describe: '',
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
        const { title, describe } = this.state;
        this.props.onSave({
            title,
            describe,
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
        const { title, describe } = this.state;
        const { classes } = this.props;
       
        return (
            <div>
            <div className="article-createform-btns">
            <Button
                onClick={this.handBack}
                className={classes.rightButtonIcon}
                raised={'true'}
                variant="raised"
                size="small">
                返回
            </Button>
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
                className={classes.rightButtonIcon}
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
                className="input"
                placeholder="请输入博文标题"
                label="标题"
                type="test"
                name="title"
                margin="normal"
                fullWidth
            />
            <ReactQuill 
                theme="snow"
                value={describe}
                onChange={(val)=>{
                    this.setState({
                        describe: val
                    })
                }}
                />
            </div>
        )
    }
}