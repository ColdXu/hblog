
import './index.less';
import Chip from 'material-ui/Chip';
import classnames from 'classnames';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { value = '', className = '', children, classes } = this.props;
        const classString = classnames('c-tag', className);

        return (
            <span className={classString}>
                {children}
            </span>
        )
    }
}