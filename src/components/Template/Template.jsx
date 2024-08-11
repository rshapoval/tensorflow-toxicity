import { AppBar, Container, Link, Toolbar } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Template({ children }) {

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
        {children}
      </Container>
    </>
  );
}

export default Template;
