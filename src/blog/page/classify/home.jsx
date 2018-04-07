import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import moment from 'moment';
import Content from '../../component/content';
import Base from '../../../common/component/base';
import history from '../../../common/util/history';
import Chip from 'material-ui/Chip';

@connect(
    state => ({
        tags: state.tags
    }),
)

export default class extends Base {
    constructor(props) {
        super(props);
        this.props.dispatch({type: 'tags/getTags'});
    }

    renderTags = (list) => {
        return list.map((item) => {
            return <Chip style={{marginRight: 10}} key={item.id} label={item.name + ' ' + item.count}/>
        })
    }

    render() {
        const { list } = this.props.tags;
        const tagsList = this.renderTags(list);
        return (
            <div className="p-classify-home">
                {tagsList}
            </div>
        )
    }
}