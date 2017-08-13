
import './index.css';

export default class extends React.Component { 
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;
        return (
            <div className="c-header">sidebar</div>
        )
    }
}