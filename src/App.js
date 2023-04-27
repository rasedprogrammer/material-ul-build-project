import { LoadingButton } from "@mui/lab";
import "./App.css";
import {
	Alert,
	Avatar,
	Box,
	Button,
	CssBaseline,
	IconButton,
	Rating,
	Switch,
	TextField,
	ThemeProvider,
	Typography,
	createTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import HeroCard from "./HeroCard";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [rating, setReating] = useState(2);

	const lightTheme = createTheme({
		palette: {
			mode: "light",
		},
	});
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			{/* // <Box className="App"> */}
			<Switch
				sx={{
					float: "right",
					padding: "10px",
					marginRight: "20px",
					marginTop: "20px",
				}}
				onClick={() => setDarkMode(!darkMode)}
			></Switch>
			<Box
				sx={{
					width: "100%",
					// height: "100vh",
					// backgroundColor: "blanchedalmond",
					padding: "20px",
				}}
			>
				<Box
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<LoadingButton loading loadingIndicator="Loading…" variant="outlined">
						Fetch data
					</LoadingButton>
				</Box>
				<Alert
					severity="error"
					sx={{
						marginTop: "20px",
					}}
				>
					Check it out!
				</Alert>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<Avatar
						alt="Remy Sharp"
						src="https://i.pinimg.com/736x/be/91/e0/be91e0c274eb13f244fb0ecc63907dce.jpg"
					/>
					<Typography variant="h5" component="h1" gutterBottom>
						Md. Rased Molla
					</Typography>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<InstagramIcon color="warning"></InstagramIcon>
					<IconButton>
						<DeleteIcon color="error"></DeleteIcon>
					</IconButton>
				</div>
				<Typography
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
					component="legend"
				>
					Controlled
				</Typography>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<Rating
						name="simple-controlled"
						value={rating}
						onChange={(event, newValue) => {
							setReating(newValue);
						}}
					/>
				</div>
				{/* <TextField></TextField> */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<TextField label="User Name"></TextField>
				</div>
				{/* <TextField label="User Name" helperText="Invalid Name"></TextField> */}
				{/* <TextField
				label="User Name"
				helperText="Invalid Name"
				error={true}
			></TextField> */}

				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<HeroCard></HeroCard>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						marginTop: "20px",
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						disableRipple={true}
						sx={{ marginTop: "50px" }}
					>
						CheckOut
					</Button>
				</div>
				<CssBaseline></CssBaseline>
			</Box>
		</ThemeProvider>
	);
}

export default App;
