
import { MuiThemeProvider, createPalette, createMuiTheme } from 'material-ui/styles';
import { blue } from 'material-ui/colors';

import './index.css';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;
        const theme = createMuiTheme({
            palette: createPalette({
                primary: blue
            }),
        });

        return (
            <MuiThemeProvider className="app" theme={theme}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}