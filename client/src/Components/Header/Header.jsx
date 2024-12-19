import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from "@mui/material";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Track whether it's sign-in or sign-up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Functions to open and close modal
  const openModal = (isSignUp) => {
    setIsSignUp(isSignUp);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  // Handle form submission
  const getInputData = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    closeModal();
  };

  return (
    <>
      {/* Header Section */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }} color="primary">
            Easier
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="primary"
              onClick={() => openModal(false)}
              sx={{ "&:hover": { textDecoration: "none" } }}
            >
              Sign In
            </Button>
            <Button
              sx={{ "&:hover": { textDecoration: "none" } }}
              onClick={() => openModal(true)}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal Dialog for Sign In / Sign Up */}
      <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
        <form onSubmit={getInputData}>
          <DialogContent>
            {isSignUp && (
              <TextField
                margin="dense"
                label="Username"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="secondary" variant="outlined">
              Close
            </Button>
            <Button type="submit" color="primary" variant="contained">
              {isSignUp ? "Submit" : "Sign In"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Header;
