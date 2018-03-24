
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import { blue } from 'material-ui/colors';
import { getUserInfo } from '../../../common/api/user'
import Base from '../../../common/component/base';
import './index.less';
import * as asdf from 'react-router'
const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});
@connect(
    state => ({
        user: state.user
    })
)
export default class extends Base {
    constructor(props) {
        super(props)
        console.log(this.props)
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