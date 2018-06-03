import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';

const styles = theme => ({
    root: {
      width: '100%',
      overflowX: 'auto',
      boxShadow: '0 0px 5px 0 rgba(140, 144, 155, 0.15)',

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

  @withStyles(styles)
export default class extends React.Component {
    render() {
        const { classes, data: {list = []}, onEdit, onRelease } = this.props;
        return (
          <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>标题</TableCell>
                    {/*<TableCell>创建时间</TableCell>*/}
                    <TableCell>发布时间</TableCell>
                    {/*<TableCell>最后发布时间</TableCell>*/}
                    <TableCell>修改时间</TableCell>
                    <TableCell>访问量</TableCell>
                    <TableCell>action</TableCell>
                </TableRow>
                </TableHead>
            <TableBody>
              {list.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.title}</TableCell>
                    {/*<TableCell>{moment(n.createDate).format('MM-DD h:mm')}</TableCell>*/}
                    <TableCell>{moment(n.publishDate).format('MM-DD h:mm')}</TableCell>
                    {/*<TableCell>{moment(n.lastPublishDate).format('MM-DD h:mm')}</TableCell>*/}
                    <TableCell>{moment(n.modifyDate).format('MM-DD h:mm')}</TableCell>
                    <TableCell>{n.pv}</TableCell>
                    <TableCell>
                      <a href="javascript:;" onClick={() => onEdit(n.id)}>编辑</a>
                      &nbsp;<span style={{color:'#fafafa' }}>|</span>&nbsp;
                      <a href="javascript:;" onClick={() => onRelease(n)}>{n.status === 'edit' ? '发布' : '撤回'}</a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
      </Paper>
        )
    }
}