import history from '../../util/history'
import { withRouter } from 'react-router'
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.history = history;
    }
}