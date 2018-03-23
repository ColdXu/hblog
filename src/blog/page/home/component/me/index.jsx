import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import Divider from 'material-ui';
import { Link } from 'react-router-dom'
import Content from '../../../../component/content';
import './index.less';


export default class extends React.Component {

    render() {
        const { classes, data } = this.props;
        console.log(data);
        
        return (
            <div className="home-me">
                <img className="home-me-headimg" src={data.headImg}/>
                <div className="home-me-footer">
                    <div className="home-me-footer-item">
                        <span>昵称 徐志勇</span>
                    </div>
                    <div className="home-me-footer-item">
                        <span>文章 <span className="home-me-footer-number">123</span></span>
                        <span>访问 <span className="home-me-footer-number">123</span></span>
                    </div>
                </div>
            </div>
        )
    }
}