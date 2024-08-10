import useModelLoader from './hooks/tf-toxic';
import TextModerate from './components/TextModerate/TextModerate';
import { AppBar, Box, Container, Link, Skeleton, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from './assets/logo.svg';

function App() {
  const { isModelLoading, modelInstance } = useModelLoader();

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" width={200}>
              <Logo />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Box sx={{
          margin: '50px 0',
        }}>
          {isModelLoading ? (
            <Skeleton variant="rounded" height={60} />
          ) : (
            <TextModerate modelInstance={modelInstance} />
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
