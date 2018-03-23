
import './index.less';
import classnames from 'classnames';


export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { value = '', className = '' } = this.props;

        const classString = classnames('c-content', className)

        return (
            <div className={classString} dangerouslySetInnerHTML={{__html: value}}></div>
        )
    }
}