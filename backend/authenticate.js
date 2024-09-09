
const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

let usertoken = "";

app.post('/register', async (req, res) => {
  const data = req.body;
  
  try {
    const response = await axios.post('http://localhost:1337/api/auth/local/register', data);

    const { user, jwt } = response.data;
    res.status(200).json({
      user: user.username,
      jwt: jwt,
    });
  } catch (e) {
    res.status(e.response?.status || 500).json({
      message: 'Registration failed',
      error: e.response?.data || e.message,
    });
  }
});

app.post('/login',  async (req,res)=>{
  const data = req.body;
  try{
    const response = await axios.post('http://localhost:1337/api/auth/local', data);
    
    const jwt = response.data;
   
    res.status(200).json({
      jwt: jwt,
    });
    usertoken = jwt
  } catch(e){
    res.status(e.response?.status || 500).json({
      message: 'Registration failed',
      error: e.response?.data || e.message,
    });  
  }
})

// import axios from "axios";
// axios
//   .post("http://localhost:1337/auth/local/register", {
//     username: "Kapman",
//     email: "test@test.com",
//     password: "Password",
//   })
//   .then((response) => {
//     console.log("User profile", response.data.user);
//     console.log("User token", response.data.jwt);
//   })
//   .catch((error) => {
//     console.log("An error occurred:", error.response);
//   });
