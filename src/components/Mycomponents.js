import React, { useState } from "react";
import UserInfor from "./UserInfo";
import DisplayInfor from "./DisplayInfo";

// class Mycomponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "huy", age: "27" },
//       { id: 2, name: "le", age: "21" },
//       { id: 3, name: "do", age: "16" },
//       { id: 4, name: "hy", age: "12" },
//       { id: 5, name: "hung", age: "18" },
//       { id: 6, name: "hoang", age: "19" },
//       { id: 7, name: "tu", age: "26" },
//       { id: 8, name: "kien", age: "27" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log(userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     return (
//       <>
//         <div className="a">
//           <UserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const Mycomponent = () => {
  const [listUsers, setlistUsers] = useState([
    { id: 1, name: "huy", age: "27" },
    { id: 2, name: "le", age: "21" },
    { id: 3, name: "do", age: "16" },
    { id: 4, name: "hy", age: "12" },
    { id: 5, name: "hung", age: "18" },
    { id: 6, name: "hoang", age: "19" },
    { id: 7, name: "tu", age: "26" },
    { id: 8, name: "kien", age: "27" },
  ]);

  const handleAddNewUser = (userObj) => {
    setlistUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setlistUsers(listUsersClone);
  };
  return (
    <>
      <div className="a">
        <UserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default Mycomponent;
