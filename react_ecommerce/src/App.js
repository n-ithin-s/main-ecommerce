

import { AuthProvider } from './AuthContext';
import AppRouter from './router/AppRouter';


function App() {

  return (
    <div className="App" >
      <AuthProvider>
    
      <AppRouter/>
   
      </AuthProvider>

   
    </div>
  );
}

export default App;
