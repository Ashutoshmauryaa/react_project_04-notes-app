import React, { FC } from "react";
import { NoteObject } from "../models/Interface";
import { Box, Typography } from "@mui/material";
import Note from "./Note";

interface INoteprops {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}
const Notes: FC<INoteprops> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
