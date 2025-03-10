
import { TaskProvider } from 'src/context/TaskContext';
import Layout from 'src/components/Layout';

function App() {
  return (
      <TaskProvider>
        <Layout />
      </TaskProvider>
  );
}

export default App;