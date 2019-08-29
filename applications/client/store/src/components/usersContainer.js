import React from "react";
import axios from "axios";
import Users from "./users";
import Filter from "./filter";
export default class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      filteredUsers: [],
      selectedItem: { value: "male" }
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3200/users").then(res => {
      this.setState({
        usersData: res.data,
        filteredUsers: res.data
      });
    });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      selectedItem: { value },
      filteredUsers: this.state.usersData.filter(user => user.gender === value)
    });
  };

  render() {
    const { selectedItem, filteredUsers } = this.state;
    return (
      <div>
        <h1> Users </h1>
        <Filter selectedItem={selectedItem} handleChange={this.handleChange} />
        <Users users={filteredUsers} />
      </div>
    );
  }
}
