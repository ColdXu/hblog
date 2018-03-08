
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import { blue } from 'material-ui/colors';
import { withRouter } from 'react-router-dom';
import { getUserInfo } from '../../../common/api/user'
import './index.less';

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});
@withRouter
@connect(
    state => ({
        user: state.user
    })
)
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.props.dispatch({type: 'user/getUserInfo'})
    }

    render() {
        if (_.isEmpty(this.props.user)) {
            return null;
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}