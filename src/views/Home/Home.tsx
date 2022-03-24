import React from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { Brand } from '../../components/icons';
import { useNotification } from '../../providers/NotificationProvider';

const Home: React.FC = () => {
  const { notify } = useNotification();

  const showNotification = () => {
    notify('Este mensaje se autodestruirá');
  };

  return (
    <Container>
      <Box>
        <div className="align-center">
          <Brand />
          <h2 className="ml-md">Bienvenido a este Test!</h2>
        </div>
        <div className="mt-xl align-center">
          <Button onClick={showNotification}>Por favor, púlsame!</Button>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
