import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import React from "react";
export default class Filter extends React.Component {
  render() {
    const { options, selectedItem, handleChange } = this.props;
    // if (!options || !Array.isArray(options)) return <h1> loading..</h1>;
    return (
      <Select value={selectedItem.value} onChange={handleChange}>
        <MenuItem value={"male"}>male</MenuItem>
        <MenuItem value={"female"}>female</MenuItem>
      </Select>
    );
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
