
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { blue } from 'material-ui/colors';
import { getUserInfo } from '../../../common/api/user'
import Base from '../../../common/component/base';
import './index.less';
const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});
export default class extends Base {
    constructor(props) {
        super(props)
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