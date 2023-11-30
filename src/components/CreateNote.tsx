import React, { FC, useState } from "react";
import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import { NoteObject } from "../models/Interface";
import { v4 as uuid } from "uuid";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { TITLE_LIMITS } from "../logo/Logo";
import { DETAILS_LIMITS } from "../logo/Logo";
const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    position: relative;
    width: 40px;
    height: 30px;
    bottom: -10px;
  }
  & > span {
    position: relative;
    font-size: 10px;
    right: 40px;
  }
`;

const Error = styled(Typography)({
  color: "red",
});
const DefaultObject = {
  id: 0,
  title: "",
  text: "",
  color: "",
  date: new Date().toLocaleString().toString(),
  //   date: new Date().toLocaleTimeString(),
};

interface ICreateNoteProps {
  addNote: (note: NoteObject) => void;
}
const CreateNote: FC<ICreateNoteProps> = ({ addNote }) => {
  const [note, setNote] = useState<NoteObject>(DefaultObject);
  const [error, setError] = useState<String>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };

  const onNoteCreate = () => {
    if (note.title == "" && note.text == "") {
      setError("All fields are mendatory");
      return;
    }
    addNote({ ...note, id: uuid() });
    setNote(DefaultObject);
  };
  return (
    <Container>
      <InputBase
        placeholder="Title"
        onChange={(e) => onValueChange(e)}
        name="title"
        value={note.title}
        inputProps={{
          maxLength: TITLE_LIMITS,
        }}
      />
      <Box component="span">
        {note.title.length}/{TITLE_LIMITS}
      </Box>
      <InputBase
        placeholder="Details"
        onChange={(e) => onValueChange(e)}
        name="text"
        value={note.text}
        inputProps={{
          maxLength: DETAILS_LIMITS,
        }}
      />
      <Box component="span">
        {note.text.length}/{DETAILS_LIMITS}
      </Box>
      <InputBase
        placeholder="Color"
        type="color"
        defaultValue="#F5F5F5"
        name="color"
        onChange={(e) => onValueChange(e)}
      />

      <Button variant="outlined" onClick={() => onNoteCreate()}>
        Create
      </Button>
      {error && (
        <Error>
          <ErrorOutlineIcon style={{ position: "relative", top: "5px" }} />
          {error}
        </Error>
      )}
    </Container>
  );
};

export default CreateNote;
