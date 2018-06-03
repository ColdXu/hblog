import Markdown from 'react-remarkable';
import classnames from 'classnames';

import Base from '../base';
import './show.less'

export default class extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        const { className = '', value, ...resprops} = this.props;

        const classString = classnames('gitbook-markdown-body', className)

        return (
            <div className={classString}>
                <Markdown
                className={classString}
                source={value}/>
            </div>
        )
    }
}