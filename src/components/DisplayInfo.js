import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
// class DisplayInfor extends React.Component {
//   constructor(props) {
//     console.log("contructor");
//     super(props);
//     this.state = {
//       isShowListUser: true,
//     };
//   }

//   componentDidMount() {
//     console.log("hahahahahahah");
//     setTimeout(() => {
//       document.title = "huy depj trai";
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("did update", this.props, prevProps);
//     if (this.props.listUsers !== prevProps.listUsers) {
//       if (this.props.listUsers.length === 14) {
//         alert("you got 14 user");
//       }
//     }
//   }

//   handleShowHide() {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   }
//   render() {
//     // console.log("chayj laij");
//     const { listUsers } = this.props;
//     return (
//       <div className="display-container">
//         {/* <img src={logo} /> */}
//         {/* <div>
//           {" "}
//           <span
//             onClick={() => {
//               this.handleShowHide();
//             }}
//           >
//             {" "}
//             {this.state.isShowListUser === true
//               ? "hide list user"
//               : "show list user"}
//           </span>
//         </div> */}
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My Name 's {user.name}</div>
//                   <div>My age 's {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  console.log("check out");

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("aasasasasas");
    }
    console.log("check useEffect");
  }, [listUsers]);
  return (
    <div className="display-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List User" : "Show List User"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My Name 's {user.name}</div>
                <div>My age 's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
