import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showModalUpdateUser } from "../../../redux/action/userAction";

const UserDataTable = (props) => {
  const [userList, setUserList] = useState([]);
  const shouldRefresh = useSelector(
    (state) => state.user.shouldRefreshUserList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    getUserList();
  }, [shouldRefresh]);

  const getUserList = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      console.log("All data: ", res.DT);
      setUserList(res.DT);
    }
  };

  return (
    <table className="table table-light table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Email</th>
          <th scope="col">Username</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList && userList.length > 0 ? (
          userList.map((item, index) => (
            <tr key={`user-${index}`}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.role}</td>
              <td className="action-cell">
                <div className="btn-container">
                  <button
                    className="action-btn view-btn"
                    data-label="View"
                  ></button>
                  <button
                    className="action-btn update-btn"
                    data-label="Update"
                    onClick={() => dispatch(showModalUpdateUser(item))}
                  ></button>
                  <button
                    className="action-btn delete-btn"
                    data-label="Delete"
                  ></button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">
              <div className="no-user-found">No user found</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserDataTable;
