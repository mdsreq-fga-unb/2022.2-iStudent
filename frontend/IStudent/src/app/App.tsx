import UserProvider from "./contexts/User";
import { Router } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router />
    </UserProvider>
  );
}

export default App;
