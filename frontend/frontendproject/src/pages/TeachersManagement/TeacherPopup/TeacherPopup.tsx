import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  createTeacherRequest,
  updateTeacherRequest,
} from "../../../store/thunks/teachersThunk";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TeacherPopup.css";

type TeacherPopupProps = {
  id?: string;
  closePopup: any;
};

type TeacherState = {
  name: string;
  email: string;
  specialty: string;
};

function TeacherPopup(props: TeacherPopupProps) {
  const dispatch = useDispatch<any>();

  //redux state
  const teachers = useSelector((state: any) => state.TeachersReducer);

  //local state
  const [teacher, setTeacher] = useState<TeacherState>({
    name: " ",
    email: " ",
    specialty: " ",
  });

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(false);

  const getTeacherById = () => {
    return teachers.filter((teacher: any, index: number) => {
      if (teacher.id == props.id) {
        setTeacher(teachers[index]);
      }
    });
  };

  useEffect(() => {
    getTeacherById();
  }, []);

  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, name: value });
  };

  const handleOnEmailChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, email: value });
  };
  const handleOnSpecialtyChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, specialty: value });
  };

  const validator = () => {
    if (
      teacher.name === "" ||
      teacher.email === "" ||
      teacher.specialty === ""
    ) {
      setSaveButtonDisabled(true);
    } else if (!ValidateEmail(teacher.email)) {
      setSaveButtonDisabled(true);
    } else {
      setSaveButtonDisabled(false);
    }
  };

  function ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    validator();
  }, [teacher]);

  const handleOnSubmit = () => {
    props.id
      ? dispatch(
          updateTeacherRequest(
            props.id,
            {
              name: teacher.name,
              specialty: teacher.specialty,
            },
            props.closePopup
          )
        )
      : dispatch(createTeacherRequest(teacher, props.closePopup));
  };
  return (
    <div className="teacher-popup-container">
      {/*overlay*/}
      <div onClick={props.closePopup} className="teacher-popup-overlay"></div>
      <div className="teacher-popup-content">
        {/*popup header (title + close icon)*/}
        <div className="teacher-popup-header">
          <Typography variant="h3" fontWeight="bold" color="primary">
            {props.id ? "Update teacher" : "Create Teacher"}
          </Typography>
          <IconButton
            size="large"
            title="close icon"
            color="error"
            onClick={props.closePopup}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Teacher Name"
              variant="outlined"
              fullWidth
              name="name"
              value={teacher.name}
              onChange={handleOnNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Email"
              variant="outlined"
              fullWidth
              name="email"
              value={teacher.email}
              onChange={handleOnEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Specialty"
              variant="outlined"
              fullWidth
              disabled={props.id ? true : false}
              name="specialty"
              value={teacher.specialty}
              onChange={handleOnSpecialtyChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={isSaveButtonDisabled}
              onClick={handleOnSubmit}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TeacherPopup;
