import './App.css';
import useModelLoader from './hooks/tf-toxic';
import TextModerate from './components/TextModerate/TextModerate';
import { AppBar, Box, Container, Skeleton, Toolbar } from '@mui/material';

function App() {
  const { isModelLoading, modelInstance } = useModelLoader();

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box sx={{
          margin: '50px 0',
        }}>
          {isModelLoading ? (
            <Skeleton variant="rounded" fullWidth height={60} />
          ) : (
            <TextModerate modelInstance={modelInstance} />
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
