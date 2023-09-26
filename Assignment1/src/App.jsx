import userData from "./data"
import UserInfo from "./components/UserInfo/UserInfo"

function App({}) {
  const data = userData[0].data;
  return (
   <div>
    <UserInfo data = {data}/>
   </div>
  )
}

export default App;
