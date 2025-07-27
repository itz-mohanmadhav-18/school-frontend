import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/lib/apollo-client';
import { AuthProvider } from '@/context/AuthProvider';
import { AppRoutes } from '@/routes';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;