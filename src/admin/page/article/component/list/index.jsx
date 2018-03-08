import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';

const styles = theme => ({
    root: {
      width: '100%',
      overflowX: 'auto',

    },
    table: {
      minWidth: 700,
    },
  });
  
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }


const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  @withStyles(styles)
export default class extends React.Component {
    render() {
        const { classes, data: {list = []} } = this.props;
        return (
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell>标题</TableCell>
                <TableCell>创建时间</TableCell>
                <TableCell>访问量</TableCell>
                <TableCell>action</TableCell>
            </TableRow>
            </TableHead>
        <TableBody>
          {list.map(n => {
            return (
              <TableRow key={n._id}>
                <TableCell>{n.title}</TableCell>
                <TableCell>{moment(n.createDate).format('YYYY-MM-DD')}</TableCell>
                <TableCell>{n.pv}</TableCell>
                <TableCell>
                  <a href="javascript:;">编辑</a>
                  &nbsp;|&nbsp;
                  <a href="javascript:;">删除</a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
        )
    }
}