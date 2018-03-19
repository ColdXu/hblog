
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
export default class extends React.Component {
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