import React, { useContext,useState } from 'react';

const AppContext = React.createContext();
const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    });
    const [search, setsearch] = useState({
    search: "",
    });
    const [culture, setculture] = useState({
    const [suggest, setsuggest] = useState([]);
const [login, setlogin] = useState({
    email: "",
    password: "",
  })

export function useApp() {
    return useContext(AppContext);
}

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

  const hanleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8080/search", search);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const hanleSuggest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/suggest",culture,suggest);
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

export function AppContextProvider({ children }) {



    const value = {
        hanleSignUp,
        hanleLogIn,
        getAllBooks,
        hanleSearch,
        hanleSuggest,
        setsearch,
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




