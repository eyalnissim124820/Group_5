import React, { useContext, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();


export function useApp() {
  return useContext(AppContext);
}


export function AppContextProvider({ children }) {

  const [culture, setculture] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [books, setbooks] = useState([])

  const getAllBooks = async (e) => {
    try {
      const res = await axios.get("http://localhost:8080/");
      console.log(res.data);
    } catch (err) {
      console.log("All Books", err);
    }
  };

  const fetchSignUp = async (signupInfo) => {
    try {
      const res = await axios.post("http://localhost:8080/signup", signupInfo);
      console.log(res.data);
      if (res.data.userId) {
        console.log("signup Success");
        return true;
      } else {
        return false;
      }

    } catch (err) {
      console.log(err);
    }
  };


  async function fetchForSuggestion(forSuggestion) {
    const toDS = { 'key1': forSuggestion, 'key2': culture + ' Literature' }
    try {
      if(!culture){
        return false
      }
      const res = await axios.post("http://localhost:8080/books/getRecomendation", toDS);
      const shortData = res.data.filter((_, i) => i < 4);
      setSuggestions(shortData)
      return true
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLogin = async (loginInfo) => {
    try {
      const res = await axios.post("http://localhost:8080/login", loginInfo);
      console.log(res.data);

      return true;

    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    fetchSignUp,
    fetchLogin,
    getAllBooks,
    fetchForSuggestion,
    setSuggestions,
    suggestions,
    setculture,
    culture,
    setbooks,
    books
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  )
}




