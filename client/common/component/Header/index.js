
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
import './index.css';


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;
        return (
            <div className="c-header">
                <AppBar position="static" color="primary">
                    <Toolbar>
                        {/*<IconButton color="contrast" aria-label="Menu">*/}
                            {/*<MenuIcon />*/}
                        {/*</IconButton>*/}
                        <Typography type="title" color="inherit">
                            管理后台页面
                        </Typography>
                        {/*<Button color="contrast">Login</Button>*/}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default Header;