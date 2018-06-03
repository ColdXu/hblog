import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import moment from 'moment';
import Base from '../../../common/component/base';
import history from '../../../common/util/history'

@connect(
    state => ({
        tags: state.tags
    }),
)

export default class extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="p-classify-detail">
              
            </div>
        )
    }
}