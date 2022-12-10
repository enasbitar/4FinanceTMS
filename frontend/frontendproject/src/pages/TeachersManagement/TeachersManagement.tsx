import React, { useState } from "react";
import "../HomePage/HomePage.css";
import "./TeachersManagement.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeachersService from "../../services/teacherServices";
//thunks
import {
  getAllTeachersRequest,
  deleteTeacherRequest,
} from "../../store/thunks/teachersThunk";
//mui
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//components
import TeacherPopup from "./TeacherPopup/TeacherPopup";
import DeletePopup from "../../components/DeletePopup/DeletePopup";
import { Grid } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import MessageNotification from "../../components/MessageNotification/MessageNotification";

function TeachersManagement() {
  const dispatch = useDispatch<any>();

  //local state
  const [teacherPopup, setTeacherPopup] = useState({
    isTeacherPopup: false,
    id: " ",
  });
  const [deletePopup, setDeletePopup] = useState({
    isDeletePopup: false,
    id: " ",
    name: " ",
  });

  //redux state
  const teachers = useSelector((state: any) => state.TeachersReducer);
  console.log("teachers", teachers);
  const loading = useSelector((state: any) => state.LoadingReducer);
  console.log("loading", loading);
  const { messageText, messageType } = useSelector(
    (state: any) => state.MessageReducer
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "specialty",
      headerName: "Specialty",
      type: "number",
      flex: 1,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "actions",
      flex: 1,
      renderCell: (row: any) => {
        return (
          <>
            <IconButton
              size="large"
              title="Edit Teacher"
              onClick={() =>
                setTeacherPopup({ ...teacherPopup, isTeacherPopup: true })
              }
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              title="Delete Teacher"
              onClick={() => {
                setDeletePopup({
                  isDeletePopup: true,
                  id: row.row.id,
                  name: row.row.name,
                });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    // dispatch a thunk
    teachers.length <= 0 && dispatch(getAllTeachersRequest());
  }, [dispatch]);

  //to close the popup turn the isteacherpopup state to false
  const closePopup = () => {
    setTeacherPopup({ isTeacherPopup: false, id: " " });
    setDeletePopup({ isDeletePopup: false, id: "", name: "" });
  };

  return (
    <>
      {loading ? <Loader /> : null}
      {messageText ? (
        <MessageNotification
          messageType={messageType}
          messageText={messageText}
        />
      ) : null}

      {/* if the isTeacherPopup is True then show the Popup */}
      {teacherPopup.isTeacherPopup ? (
        <TeacherPopup closePopup={closePopup} id={teacherPopup.id} />
      ) : null}

      {deletePopup.isDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
          name={deletePopup.name}
        />
      ) : null}

      <div>
        <h1 className="titles">Teachers Management</h1>

        <div className="button-container">
          <Button
            onClick={() =>
              setTeacherPopup({
                ...teacherPopup,
                isTeacherPopup: true,
              })
            }
            className="create-button"
            color="primary"
            variant="contained"
          >
            Create Teacher
          </Button>
        </div>
        <div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={teachers}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}

export default TeachersManagement;
