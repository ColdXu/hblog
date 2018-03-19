import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuIcon from 'material-ui-icons/Menu';

import { MenuList, MenuItem } from 'material-ui/Menu';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AddIcon from 'material-ui-icons/Add';
import NoteIcon from 'material-ui-icons/Note';
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './index.less';

const drawerWidth = 220;
const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
      backgroundColor: '#fff',
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
  });

  const menuList = [
      {
        title: '首页',
        key: 'home',
        path: '/',
        icon: HomeIcon,
      },
      {
        title: '写作',
        key: 'create',
        path: '/article/create',
        icon: AddIcon,
      },
      {
        title: '博文列表',
        key: 'list',
        path: '/article',
        icon: NoteIcon,
      },
  ]

  @withRouter
  @connect(
      state => ({
          user: state.user
      })
  )
class Layout extends React.Component {
    constructor(props) {
        super(props)
    }


    handleListClick = (item) => {
        if (this.props.location.pathname !== item.path) {
            this.props.history.push(item.path);
        }
    }

    renderList = () => {
        return menuList.map((item, index) => {
            return (
                <MenuItem 
                    selected={this.props.location.pathname == item.path} 
                    onClick={() => {this.handleListClick(item)}} 
                    key={index}
                    button
                >
                    <ListItemIcon>
                        <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={<span><span className="layout-head-title">{item.title}</span><span className="layout-head-text"> / {item.key}</span></span>} />
                </MenuItem>
            )
        })
    }

    render() {
        const { children, classes } = this.props;
        const list = this.renderList();

        return (
            <div className="layout">
            <div className="layout-header">
                <div className="layout-header-container">
                    <div className="layout-title">blog博客</div>
                </div>
            </div>
            <main
                className="layout-container">
                {this.props.children}
            </main>
            </div>
        )
    }
}


export default withStyles(styles)(Layout)