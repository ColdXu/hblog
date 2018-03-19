import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import Divider from 'material-ui';

export default class extends React.Component {
    render() {
        const { classes, data: {list = []} } = this.props;
        console.log(list)
        return (
            <div></div>
        )
    }
}