import { Grid, Typography, Button, TextField, Select, Chip, Input } from 'material-ui';
import Delete from 'material-ui-icons/Delete';
import FileUploadIcon from 'material-ui-icons/FileUpload';
import KeyboardVoice from 'material-ui-icons/KeyboardVoice';
import Icon from 'material-ui/Icon';
import Send from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';
import IconButton from 'material-ui/IconButton';
import * as apiMedia from '../../../../../common/api/media';
import { getMedia } from '../../../../../common/util/media';
import classnames from 'classnames';
import Show from '../../../../../common/component/markdown/show';
import Edit from '../../../../../common/component/markdown/edit';
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
        marginTop: 0,
    },
    textfield2: {
        width: 250,
        marginTop: 0,
    },
    fileUploadIcon: {
        width: 50,
        height: 50,
        color: '#868686'
    }
  });

  @withStyles(styles)
export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleUpload: false,
        }
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

    handleVisibleUpload = () => {
        this.setState({
            visibleUpload: !this.state.visibleUpload
        })
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
        const { classes, onChange, data, tagsOptions } = this.props;
        const { visibleUpload } = this.state;
        const options = {
            mode: "markdown",
            theme: "monokai"
        };

        return (
            <div className="article-createform">
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
                        value={data.tagId || ''}
                        onChange={(e) => this.handleChange('tagId', e.target.value)}
                        margin="normal"
                        >
                        {tagsOptions.map(item => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <IconButton onClick={this.handleVisibleUpload} aria-label="展开">
                        {visibleUpload &&
                            <ExpandLess/>
                        }
                        {!visibleUpload &&
                            <ExpandMore/>
                        }
                    </IconButton>
                </div>
                {visibleUpload &&
                    <div className="article-createform-upload">
                        {data.coverId && 
                            <img src={getMedia(data.coverId)}/>
                        }
                        {!data.coverId &&
                            <div className="article-createform-icon">
                                <div>
                                <FileUploadIcon
                                className={classes.fileUploadIcon}
                            ></FileUploadIcon>
                                </div>
                            </div>
                        }
                        <Input type="file" className="article-createform-input" onChange={this.handleFileChange}></Input>
                    </div>
                }
                <div className="article-createform-edit">
                
                        <Edit
                            className="article-createform-edit-l"
                            value={data.content}
                            options={{
                                mode: 'markdown',
                                theme: 'material',
                                lineNumbers: true
                            }}
                            onChange={(editor, data, value) => {
                                this.handleChange('content', value)
                            }}
                        />
                        <Show 
                            className="article-createform-edit-r"
                            value={data.content}/>
                    
                </div>
            </div>
        )
    }
}
// 请上传690px * 290px的封面图

