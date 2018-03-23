import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import Divider from 'material-ui';
import { Link } from 'react-router-dom'
import Content from '../../../../component/content';
import './index.less';


export default class extends React.Component {

    renderList = (data) => {
        let list = [];
        for (let item of data) {
            list.push(
                <div key={item.id} className="home-list-item">
                    <Link to={`/article/${item.id}`} className="home-list-item-title">{item.title}</Link>
                    <Content className="home-list-item-content" value={item.content}/>
                    <div className="home-list-item-footer">
                        <div>
                            {moment(item.publishDate).format('YY年MM月DD日 HH:mm')}
                        </div>
                        <div className="home-list-item-pv">
                            浏览：{item.pv}
                        </div>
                    </div>
                </div>
            )
        }
        return list;
    }

    render() {
        const { classes, data: {list = []} } = this.props;

        return (
            <div className="home-list">
                {this.renderList(list)}
            </div>
        )
    }
}