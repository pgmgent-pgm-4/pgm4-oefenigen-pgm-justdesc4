import {
	AppBar,
	Box,
	Button,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
			<AppBar position="static">
				<Toolbar>
					<NavLink to="/">
						<Button sx={{ color: "white", display: "block" }}>Start</Button>
					</NavLink>
					<NavLink to="/blog">
						<Button sx={{ color: "white", display: "block" }}>Blog</Button>
					</NavLink>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
