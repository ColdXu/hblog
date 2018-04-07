
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import { blue } from 'material-ui/colors';
import Base from '../../../common/component/base';
import { getUserInfo } from '../../../common/api/user'
import './index.less';


const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});
export default class extends Base {
    constructor(props) {
        super(props)
        // this.props.dispatch({type: 'user/getSizeInfo', payload: {username: 'cold'}})
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="app">
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}