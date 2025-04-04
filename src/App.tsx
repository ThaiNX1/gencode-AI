import { ApolloProvider } from '@apollo/client';
import 'antd/dist/reset.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import client from './graphql/client';
import Dashboard from './pages/dashboard';
import Project from './pages/project';
import ProjectDetail from './pages/project/detail';
import Settings from './pages/settings';
import Tasks from './pages/tasks';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
