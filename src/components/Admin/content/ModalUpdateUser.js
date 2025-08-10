import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCameraRetro } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { hideModalUpdateUser } from "../../../redux/action/userAction";
import { putUpdateUser } from "../../../services/apiServices";
import { triggerRefreshUserList } from "../../../redux/action/userAction";

const ModalAddNewUser = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const show = useSelector((state) => state.user.showModalUpdateUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
    dispatch(hideModalUpdateUser());
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };

  useEffect(() => {
    console.log("Old data: ", selectedUser);
    if (selectedUser) {
      setEmail(selectedUser.email || "");
      setUsername(selectedUser.username || "");
      setRole(selectedUser.role || "USER");
      if (selectedUser.image) {
        setPreviewImage(`data:image/jpeg;base64,${selectedUser.image}`);
      }
      setImage(selectedUser.image);
    }
  }, [selectedUser]);

  const handleSubmitUpdateUser = async () => {
    let data = await putUpdateUser(selectedUser.id, username, role, image);
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
      <Modal
        show={show}
        onHide={handleClose}
        size={"lg"}
        backdrop="static"
        className="modal-add-new-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-4">
              <label>Avatar</label>
            </div>
            <div className="col-md-8">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                readOnly
                disabled
              />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={"PhdCswia*dsald123"}
                onChange={(event) => setPassword(event.target.value)}
                readOnly
                disabled
              />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <input
                type="file"
                hidden
                id="uploadImg"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-3 img-preview">
              {previewImage && <img src={previewImage} alt="preview" />}
              <label htmlFor="uploadImg">
                <FaCameraRetro id="add-img-icon" />
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNewUser;
