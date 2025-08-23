import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModalConfirmDeleteUser } from "../../../../redux/action/userAction";
import { deleteUser } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import { triggerRefreshUserList } from "../../../../redux/action/userAction";

const ModalDeleteUser = () => {
  const dispatch = useDispatch();
  const userToDelete = useSelector((state) => state.user.userToDelete);
  const show = useSelector((state) => state.user.showModalConfirmDeleteUser);

  const handleClose = () => {
    dispatch(hideModalConfirmDeleteUser());
  };

  const handleAdmitDeleteUser = async () => {
    let data = await deleteUser(userToDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
      dispatch(triggerRefreshUserList());
      handleClose();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You want to delete user with email: <br />
          <b>{userToDelete && userToDelete.email ? userToDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdmitDeleteUser()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
