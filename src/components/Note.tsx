import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { NoteObject } from "../models/Interface";

const Stylecard = styled(Card)`
  width: 400px;
  margin: 20px;
`;
const Buttonwrap = styled(Box)`
  & > Button {
    border: 1px solid #000;
    background: #fff;
    margin-top: 5px;
  }
`;
const Textwrapper = styled(Typography)`
  color: rgb;
`;
interface INoteprops {
  note: NoteObject;
  deleteNote: (id: number) => void;
}
const Note: React.FC<INoteprops> = ({ note, deleteNote }) => {
  return (
    <Stylecard>
      <CardContent style={{ backgroundColor: note.color }}>
        <Buttonwrap>
          <Textwrapper>{note.title}</Textwrapper>
          <Textwrapper>{note.text}</Textwrapper>
          <Textwrapper>{note.date}</Textwrapper>
          <Button variant="outlined" onClick={() => deleteNote(note.id)}>
            Delete
          </Button>
        </Buttonwrap>
      </CardContent>{" "}
    </Stylecard>
  );
};

export default Note;
