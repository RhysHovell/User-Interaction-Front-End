import React, {Component} from 'react';
import axios from 'axios';

const UserInteraction = props => (
    <tr>
        <td>{props.userinteraction.user}</td>
        <td>{props.userinteraction.product}</td>
        <td>{props.userinteraction.timestamp}</td>
    </tr>
)
export default class UserInteractionList extends Component {

    constructor(props) {
        super(props);
        this.state = {userinteractions: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/userinteractions/')
        .then(response => {
            this.setState({ userinteractions: response.data });
        })
        .catch(function (error){
            console.log(error);
        })
    }
    userInteractionList() {
        return this.state.userinteractions.map(function(currentUserInteraction,i){
            return <UserInteraction userinteraction={currentUserInteraction} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>User Interactions</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Product</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userInteractionList() }
                    </tbody>
                </table>
            </div>
        )
    }
}