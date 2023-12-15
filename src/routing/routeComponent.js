import {
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from '../pages/login'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationIndex />} />
      <Route path="/login" element={<AuthenticationIndex />} />
      <Route path="/" element={<PrivateRoute />}>
       
          <Route path="/home" element={<Homepage />} />
      </Route >
    </Routes>
  )
}

export default AppRoutes