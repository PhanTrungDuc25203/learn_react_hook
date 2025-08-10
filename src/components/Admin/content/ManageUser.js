import ModalAddNewUser from "./ModalAddNewUser";
import "./ManageUser.scss";
import UserDataTable from "./UserDataTable";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div className="user-data-operation">
          <ModalAddNewUser />
          <ModalUpdateUser />
        </div>
        <div className="user-data-table-container">
          <UserDataTable />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
