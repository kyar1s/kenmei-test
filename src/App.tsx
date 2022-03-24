import Home from './views/Home';
import './App.scss';
import Layout from './components/Layout';
import NotificationProvider from './providers/NotificationProvider';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <Layout>
        <Home />
      </Layout>
    </NotificationProvider>
  );
};

export default App;
