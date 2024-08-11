import useModelLoader from './hooks/tf-toxic';
import TextModerate from './components/TextModerate/TextModerate';
import { Box, Skeleton } from '@mui/material';
import Template from './components/Template/Template';

function App() {
  const { isModelLoading, modelInstance } = useModelLoader();

  return (
    <Template>
      <Box sx={{
        margin: '50px 0',
      }}>
        {isModelLoading ? (
          <Skeleton variant="rounded" height={60} />
        ) : (
          <TextModerate modelInstance={modelInstance} />
        )}
      </Box>
    </Template>
  );
}

export default App;
