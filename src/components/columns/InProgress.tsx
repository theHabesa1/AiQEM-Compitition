import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { inProgressSlice } from "../../redux/slice/inProgress";
import ColumnLayout from "../ColumnLayout";

export function InProgressColumn() {
  const { inProgress } = useSelector((state: StoreState) => state);

  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = inProgressSlice;

  return (
    <>
      <Typography
        mb={3}
        textAlign="center"
        fontFamily="Poppins, sans-serif"
        fontWeight="900"
        color="#4a90e2"
      >
        In Progress
      </Typography>
      <ColumnLayout
        droppableId="inProgress"
        labelText="Type 'in progress' item"
        completedHandler={completeStatus}
        removeHandler={remove}
        addHandler={add}
        selectorState={inProgress}
        updateTextShowed={updateTextShowed}
      />
    </>
  );
}
