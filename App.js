import { Routes } from './src/routes';
import Container, { Toast } from 'toastify-react-native';

export default function App() {
  return (
    <>
      <Routes/>
      <Container position="top" />
    </>
  );
}


