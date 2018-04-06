// import { withStyles } from 'material-ui/styles';
import { Grid, Typography, Button, TextField, Select, Chip, Input } from 'material-ui';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Delete from 'material-ui-icons/Delete';
import FileUploadIcon from 'material-ui-icons/FileUpload';
import KeyboardVoice from 'material-ui-icons/KeyboardVoice';
import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';
import Send from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import * as apiMedia from '../../../../../common/api/media';
import { getMedia } from '../../../../../common/util/media';
import classnames from 'classnames';
import './index.less';
import { MenuItem } from 'material-ui/Menu';


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
    },
    iconSmall: {
      fontSize: 20,
    },
    textfield1: {
        width: '100%',
        marginRight: 15,
    },
    textfield2: {
        width: 250,
    },
    fileUploadIcon: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        marginLeft: -50,
        width: 100,
        height: 100,
        color: '#868686'
    }
  });

  const tags = [
    'JavaScript',
    'Nodejs',
    '前端',
    '后端',
    '游戏'
  ];

  @withStyles(styles)
export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = (name, value) => {
        this.props.onChange(name, value)
    }

    handleSave = () => {
        this.props.onSave();
    }

    handleRelease = () => {
        this.props.onRelease();
    }

    handleFileChange = (event) => {
        const { files } = event.target
        const formData = new FormData()
        formData.append('file', files[0])
        apiMedia.uploadMedia(formData).then(({data})=> {
            this.handleChange('coverId', data.id)

        })
    }

    render() {
        const { classes, onChange, data } = this.props;
       
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
                <div className="article-createform-header">
                    <TextField
                        onChange={(e) => this.handleChange('title', e.target.value)}
                        value={data.title}
                        className={classes.textfield1}
                        placeholder="请输入博文标题"
                        label="标题"
                        type="test"
                        name="title"
                        margin="normal"
                    />
                    <TextField
                        select
                        label="标签"
                        className={classes.textfield2}
                        value={data.tag || tags[0]}
                        onChange={(e) => this.handleChange('tag', e.target.value)}
                        margin="normal"
                        >
                        {tags.map(value => (
                            <MenuItem key={value} value={value}>
                            {value}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="article-createform-upload">
                    {data.coverId && 
                        <img src={getMedia(data.coverId)}/>
                    }
                    {!data.coverId &&
                        <FileUploadIcon
                            className={classes.fileUploadIcon}
                        ></FileUploadIcon>
                    }
                        <Input type="file" name="dom" onChange={this.handleFileChange}></Input>
                </div>
                <ReactQuill 
                    theme="snow"
                    value={data.content}
                    onChange={(value) => this.handleChange('content', value)}
                    />
            </div>
        )
    }
}

// 