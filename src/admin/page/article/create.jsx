import { Grid, Typography, Button, TextField } from 'material-ui'
import { connect } from 'react-redux'
import CreateForm from './component/create-form';

@connect(
    state => ({
        user: state.user
    }),
)

export default class extends React.Component {

    handleSave = (data) => {
        this.props.dispatch({type: 'article/createAdminArticle', payload: data})
    }

    handleRelease = () => {

    }

    render() {

        return (
            <div>
                <CreateForm onSave={this.handleSave}/>
            </div>
        )
    }
}