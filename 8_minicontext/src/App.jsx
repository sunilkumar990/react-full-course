import Login from "./componants/Login";
import Profile from "./componants/Profile";
import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
     <h1>this is</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}
export default App;
