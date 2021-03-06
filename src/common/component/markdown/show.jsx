import Remarkable from 'remarkable';
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import classnames from 'classnames';
import Base from '../base';
import './show.less'

// console.log(highlight)

export default class extends Base {
    constructor(props) {
        super(props)

        this.md = new Remarkable('full', {
            html:         false,        // Enable HTML tags in source
            xhtmlOut:     false,        // Use '/' to close single tags (<br />)
            breaks:       false,        // Convert '\n' in paragraphs into <br>
            langPrefix:   'language-',  // CSS language prefix for fenced blocks
            linkify:      true,         // autoconvert URL-like texts to links
            linkTarget:   '',           // set target to open link in
          
            // Enable some language-neutral replacements + quotes beautification
            typographer:  false,
          
            // Double + single quotes replacement pairs, when typographer enabled,
            // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
            quotes: '“”‘’',
          
            // Highlighter function. Should return escaped HTML,
            // or '' if input not changed
            highlight: function (str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value;
                } catch (__) {}
              }
          
              try {
                return hljs.highlightAuto(str).value;
              } catch (__) {}
          
              return ''; // use external default escaping
            }
          });

    }

    render() {
        const { className = '', value, ...resprops} = this.props;
        const classString = classnames('gitbook-markdown-body', className);
        return (
            <div className={classString}>
              <div dangerouslySetInnerHTML={{__html: this.md.render(value)}}>
              </div>
            </div>
           
        )
    }
}