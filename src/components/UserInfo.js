import React, { useState } from "react";

// class UserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "",
//     age: "",
//   };

//   handleChangeInput(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   handleChangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//     this.setState({
//       name: "",
//       age: "",
//     });
//   }
//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and i'm from {this.state.address} , i'm{" "}
//         {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>your Name</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleChangeInput(event)}
//           />
//           <label>your Age</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const UserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
    setName("");
    setAge("");
  };

  return (
    <div>
      my name is {name} and i'm from {address} , i'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>your Name</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleChangeInput(event)}
        />
        <label>your Age</label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserInfor;
