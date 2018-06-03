import Markdown from 'react-remarkable';
import classnames from 'classnames';
import 'gitbook-markdown-css/less/main.less';
import Base from '../base';

export default class extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        const { className = '', source, ...resprops} = this.props;

        const classString = classnames('gitbook-markdown-body', className)

        return (
            <Markdown
                className={classString}
                source={source}/>
        )
    }
}