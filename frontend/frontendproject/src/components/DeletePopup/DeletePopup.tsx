import { type } from "@testing-library/user-event/dist/type";
//thunks
import { deleteTeacherRequest } from "../../store/thunks/teachersThunk";
//mui
import { Button } from "@mui/material";
import React from "react";
import "./DeletePopup.css";
import { useDispatch } from "react-redux";

type DeletePopupProp = {
  id: string;
  name: string;
  closePopup: any;
};
function DeletePopup(props: DeletePopupProp) {
  const dispatch = useDispatch<any>();

  return (
    <div>
      {/*overlay */}
      <div onClick={props.closePopup} className="delete-popup-overlay"></div>
      <div className="delete-popup-content">
        <h1>Are you sure you want to delete {props.name}teacher ?</h1>
        <div className="delete-popup-header">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={props.closePopup}
          >
            cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(deleteTeacherRequest(props.id, props.closePopup))
            }
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
