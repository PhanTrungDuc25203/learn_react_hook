import ModalAddNewUser from "./ModalAddNewUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage user</div>
      <div className="users-content">
        <div className="user-data-operation">
          <button className="add-new-user-btn">
            <ModalAddNewUser />
          </button>
        </div>
        <div className="user-data-table">data's table</div>
      </div>
    </div>
  );
};

export default ManageUser;
