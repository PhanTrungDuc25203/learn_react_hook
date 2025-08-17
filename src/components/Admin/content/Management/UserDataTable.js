import { useEffect, useState } from "react";
import { getAllUser } from "../../../../services/apiServices";
import { getAllUserWithPaginate } from "../../../../services/apiServices";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showModalUpdateUser } from "../../../../redux/action/userAction";
import { showModalConfirmDeleteUser } from "../../../../redux/action/userAction";
import ReactPaginate from "react-paginate";

const UserDataTable = (props) => {
  const userListForEachPage = 8;
  const [userList, setUserList] = useState([]);
  const shouldRefresh = useSelector(
    (state) => state.user.shouldRefreshUserList
  );
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(+event.selected);
    getUserList(+event.selected + 1);
  };

  useEffect(() => {
    getUserList(1);
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    getUserList(1);
    setCurrentPage(0);
  }, [shouldRefresh]);

  //   const getUserList = async () => {
  //     let res = await getAllUser();
  //     if (res.EC === 0) {
  //       setUserList(res.DT);
  //     }
  //   };

  const getUserList = async (page) => {
    let res = await getAllUserWithPaginate(page, userListForEachPage);
    if (res.EC === 0) {
      setUserList(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  return (
    <>
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
                      onClick={() => dispatch(showModalConfirmDeleteUser(item))}
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
      <div className="user-table-pagination-control">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={currentPage}
        />
      </div>
    </>
  );
};

export default UserDataTable;
