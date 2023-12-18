import React, { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
import { AuthContext } from "../../contexts/authContext";
import { Button, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const root = {
    width: 450
}

const style = {
    display: "center",
    justifyContent: "center",
    padding: 2,
    maxWidth: 450
}

const LoginForm = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        await context.authenticate(userName, password);
        if (context.isAuthenticated) {
          // Redirect to the home page after successful authentication
          navigate("/");
        }
      }
    

    return (
        <Paper sx={style}>
        <Grid2 component="form" container spacing={2}>
            <Grid2 xs={12}>
            <TextField id="usernamefield" label="User Name" variant="filled" sx={root} onChange={(event) => {setUserName(event.target.value)}}/>
            </Grid2>
            <Grid2 xs={12}>
            <TextField id="passwordfield" label="Password" type="password" variant="filled" onChange={(event) => {setPassword(event.target.value)}}sx={root}/>
            </Grid2>
            <Grid2 sx={2}>
            <Button variant="contained" sx={{ width: 100 }} onClick={login}>Login</Button>
                </Grid2>
                <Grid2 sx={2}>
                    <Link to="/signup">
                    <Button>Sign Up</Button>
                    </Link>
                </Grid2>
            </Grid2 >  
        </Paper>    
    )
}

export default LoginForm;