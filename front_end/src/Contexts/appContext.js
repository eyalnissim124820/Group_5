import React, { useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}


export function AppContextProvider({ children }) {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const [culture, setculture] = useState({
    culture: "",
  });
  const [suggest, setsuggest] = useState([]);
  const [login, setlogin] = useState({
    email: "",
    password: "",
  })



  const getAllBooks = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8080/");
      console.log(res.data);
    } catch (err) {
      console.log("All Books", err);
    }
  };

  const hanleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/signup", signup);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  
  const hanleSuggest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/suggest", culture, suggest);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const hanleLogIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", login);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    hanleSignUp,
    hanleLogIn,
    getAllBooks,
    hanleSuggest,
    setlogin,
    setSignup,
    setsuggest,
    setculture,
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}




