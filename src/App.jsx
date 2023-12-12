import react, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "../src/appwrite/auth";
import { login, logout } from "../src/store/authSlice";
import Header from "../src/component/Header/Header"
import Footer from "../src/component/Footer/Footer"

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header/>
        
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
