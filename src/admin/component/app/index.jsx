
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';
import { withRouter } from 'react-router-dom';
import { getUserInfo } from '../../../common/api/user'
import './index.css';

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});

@withRouter
export default class extends React.Component {
    constructor(props) {
        super(props)
        getUserInfo().then((data) => {
            this.props.dispatch({type: 'user/getUserInfo', payload: data})
        }).catch((e) => {
            if (this.props.location.pathname !== '/login') {
                this.props.history.push('login');
            }
        })
    }

    // componentWillReceiveProps(nextProps) {
    // }

    render() {
        console.log(this.props)
        // const { children } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}