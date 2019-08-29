import React from "react";
export default class Users extends React.Component {
  render() {
    const { users } = this.props;
    if (!users || !Array.isArray(users)) return <h1> loading..</h1>;
    return <div>{_getUsers(users)}</div>;
  }
}

function _getUsers(users) {
  return users.map((user, index) => {
    const { email, name, gender } = user;
    return (
      <div key={`user_${index}`} style={{ border: "1px solid black" }}>
        <h1>{email}</h1>
        <h1>{name}</h1>
        <h1>{gender}</h1>
      </div>
    );
  });
}
