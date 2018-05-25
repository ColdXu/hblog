import ReactMarkdown from 'react-markdown';
import Base from '../../../common/component/base';
import classnames from 'classnames';

import './index.less';
export default class extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, className = '', ...resprops} = this.props;

        const classString = classnames('c-markdown', className)

        return (
            <ReactMarkdown className={classString} {...resprops}>{children}</ReactMarkdown>
        )
    }
}