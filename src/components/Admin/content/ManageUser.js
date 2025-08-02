import ModalAddNewUser from "./ModalAddNewUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div className="user-data-operation">
            <ModalAddNewUser />
        </div>
        <div className="user-data-table">data's table</div>
      </div>
    </div>
  );
};

export default ManageUser;
