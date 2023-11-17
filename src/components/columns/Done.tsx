import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { doneSlice } from "../../redux/slice/done";
import ColumnLayout from "../ColumnLayout";

export function DoneColumn() {
  const { done } = useSelector((state: StoreState) => state);
  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = doneSlice;

  return (
    <>
      <Typography
        mb={3}
        textAlign="center"
        fontFamily="Poppins, sans-serif"
        fontWeight="900"
        color="#37d67a"
      >
        Done
      </Typography>
      <ColumnLayout
        droppableId="done"
        labelText="Add Task"
        completedHandler={completeStatus}
        removeHandler={remove}
        addHandler={add}
        selectorState={done}
        updateTextShowed={updateTextShowed}
      />
    </>
  );
}
