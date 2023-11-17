import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { ToDoColumn } from './components/columns/ToDo';
import { DoneColumn } from './components/columns/Done';
import { InProgressColumn } from './components/columns/InProgress';
import { todoSlice as todo } from './redux/slice/todo';
import { inProgressSlice as inProgress } from './redux/slice/inProgress';
import { doneSlice as done } from './redux/slice/done';
import { StoreState } from './redux/store';
import { IModel } from './types';
import GitHubIcon from '@mui/icons-material/GitHub';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import React, { useEffect } from 'react';

type TAllSilces = 'todo' | 'inProgress' | 'done';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state: StoreState) => state);
  
  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { element: '.todo', popover: { title: 'ሠላም', description: 'This is Yareds to do app. Start by adding a task you want to complete', side: "left", align: 'start' }},
        { element: '.inprog', popover: { title: 'In Progress', description: 'The Item you create is draggable. so drag it to the to do watch as the icons change', side: "bottom", align: 'start' }},
        { element: '.done', popover: { title: 'Done ', description: 'When your done place it on the Done section or just click it', side: "bottom", align: 'start' }},
      ]
    });

    driverObj.drive();

  }, []); 
  

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { destination, source, draggableId } = result;
    const allSlices = { todo, inProgress, done };

    if (destination.droppableId === source.droppableId) {
      dispatch(
        allSlices[destination.droppableId as TAllSilces].actions.reorder(result)
      );
    } else {
      const [filterState] = (
        (appState as any)[source.droppableId] as IModel[]
      ).filter(({ id }) => id === draggableId);

      dispatch(
        allSlices[source.droppableId as TAllSilces].actions.remove(draggableId)
      );
      dispatch(
        allSlices[destination.droppableId as TAllSilces].actions.update({
          ...result,
          filterState,
        })
      );
    }
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent='center'>
        <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
          <Grid item md={4} className="todo">
            <ToDoColumn />
          </Grid>
          <Grid item md={4} className="inprog">
            <InProgressColumn />
          </Grid>
          <Grid item md={4} className="done">
            <DoneColumn />
          </Grid>
        </DragDropContext>
      </Grid>

      <Grid container justifyContent='center' mt={4}>
        <Typography variant='body1'>
          Made By ያሬድ አበራ
          <a href='https://github.com/theHabesa1' target='_blank' rel='noopener noreferrer'>
            <GitHubIcon sx={{ ml: 1 }} />
          </a>
        </Typography>
      </Grid>
    </Container>
  );
}

export default App;
