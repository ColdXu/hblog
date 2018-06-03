import classnames from 'classnames';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/markdown/markdown.js';
import Base from '../base';
import './edit.less';
export default class extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, className = '', value, onChange, ...resprops} = this.props;

        const classString = classnames(className)

        return (
            <CodeMirror
                className={classString}
                value={value}
                options={{
                    mode: 'markdown',
                    theme: 'material',
                    lineNumbers: true
                }}
                onChange={onChange}
            />
        )
    }
}