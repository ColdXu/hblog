import Header from '../../../common/component/Header';

export default class extends React.Component { 
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;
        return (
            <div className="c-layout">
                <Header/>
                <div className="c-layout-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}