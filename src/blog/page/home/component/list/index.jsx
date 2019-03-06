import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import Divider from 'material-ui';
import { Link } from 'react-router-dom'
import Tag from '../../../../component/tag';
import Show from '../../../../../common/component/markdown/show';
import './index.less';


export default class extends React.Component {

    renderList = (data) => {
        let list = [];
        for (let item of data) {
            list.push(
                <div key={item.id} className="home-list-item">
                    <div className="home-list-box">
                        <div>
                            <Link to={`/article/${item.id}`} className="home-list-item-title">{item.title}</Link>
                            <div className="home-list-item-footer">
                                <div>
                                    发表于 {moment(item.publishDate).format('YY年MM月DD日')}
                                </div>
                                <span className="home-list-item-footer-line">
                                    |
                                </span>
                                    <div className="home-list-item-pv">
                                    浏览 {item.pv}
                                    </div>
                                <span className="home-list-item-footer-line">
                                |
                                </span>
                                <div>
                                    分类于 <Tag>{item.tagName}</Tag>
                                </div>
                            </div>
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
// <Show className="home-list-item-content" value={item.content}/>
