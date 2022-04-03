import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <UserCard
        firstName="Emma"
        lastName="Watson"
        nickName="@EmWatson"
        tweets={1337}
        following={561}
        followers={718}
      />
    </>
  );
}

export default App;
