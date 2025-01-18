import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%", lg: "80%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "auto",
          // overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        {/* Left Section - Image with Typography */}
        <Box
          sx={{
            flex: 1,
            width: "50%",
            position: "relative",
            backgroundImage: `url('login.png')`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "200px", md: "auto" },
            borderRadius: "10px",
          }}
        >
          {/* Typography at the bottom */}
          <Box
            sx={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              right: "1rem",
              color: "#fff",
              textAlign: "start",
              p: "30px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                fontSize: "42px",
              }}
            >
              HIVE
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              Collaborative Learning, Unlimited Potential{" "}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "18px" }}>
              Empowering students to collaborate, share knowledge, and succeed
              together in their learning journey.
            </Typography>
          </Box>
        </Box>

        {/* Right Section - Login Fields */}
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pr: { lg: "80px", xs: "10px", md: "30px", sm: "80px" },
            pl: { lg: "80px", xs: "10px", md: "", sm: "80px" },
            pt: { lg: "20px", xs: "10px", md: "10px", sm: "10px" },
            pb: { lg: "20px", xs: "10px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: { lg: "50%", xs: "100%", md: "100%", sm: "100%" },
              // padding: "2rem", // Padding from all sides
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",

              padding: "1rem",
              justifyContent: "start",
              gap: "0.5rem",
              backgroundColor: "#fff",
            }}
          >
            {/* Sign In and New User */}
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="start"
              sx={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}
            >
              Sign In
            </Typography>
            <Typography
              variant="body2"
              textAlign="start"
              sx={{ marginBottom: "1rem", fontSize: "0.9rem" }}
            >
              New User?{" "}
              <Typography
                component="span"
                sx={{ color: "#08C2FF", cursor: "pointer" }}
              >
                Create your account
              </Typography>
            </Typography>

            {/* Email Field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                component="label"
                htmlFor="email"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "0.3rem",
                  textAlign: "start",
                  display: "block",
                  fontSize: "0.9rem",
                }}
              >
                Email
              </Typography>
              <TextField
                id="email"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px", // Outer container radius
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // No border by default
                      borderRadius: "10px", // Default border radius
                    },
                    "&:hover fieldset": {
                      borderColor: "#08C2FF", // Border color on hover
                      borderRadius: "10px", // Ensure border radius on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#08C2FF", // Border color on focus
                      borderRadius: "10px", // Ensure border radius on focus
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 12px", // Adjust padding as needed
                    fontSize: "0.9rem", // Font size
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                component="label"
                htmlFor="password"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "0.3rem",
                  textAlign: "start",
                  display: "block",
                  fontSize: "0.9rem",
                }}
              >
                Password
              </Typography>
              <TextField
                id="password"
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px", // Outer container radius
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // No border by default
                      borderRadius: "10px", // Default border radius
                    },
                    "&:hover fieldset": {
                      borderColor: "#08C2FF", // Border color on hover
                      borderRadius: "10px", // Ensure border radius on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#08C2FF", // Border color on focus
                      borderRadius: "10px", // Ensure border radius on focus
                    },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 12px", // Adjust padding as needed
                    fontSize: "0.9rem", // Font size
                  },
                }}
              />
            </Box>

            {/* Forgot Password and Sign In Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: "0.8rem" }}
              >
                Forgot password?
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#08C2FF",
                  borderRadius: "7px",
                  color: "#fff",
                  padding: "0.3rem 0.8rem", // Reduced button size
                  fontSize: "0.8rem", // Smaller text size
                  "&:hover": { backgroundColor: "#08A2E5" },
                }}
              >
                Sign In
              </Button>
            </Box>

            {/* Divider */}
            <Divider sx={{ margin: "1rem 0", fontSize: "1.4rem" }}>or</Divider>

            {/* Google and GitHub Buttons */}
            <Button
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: "0.5rem",
                color: "#000",
                borderColor: "#ccc",
                fontSize: "0.8rem", // Smaller font size
                padding: "0.3rem 0.8rem", // Reduced button size
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              startIcon={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google.png"
                  alt="Google"
                  style={{ width: 20, height: 20 }}
                />
              }
            >
              Sign in with Google
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                color: "#000",
                borderColor: "#ccc",
                fontSize: "0.8rem", // Smaller font size
                padding: "0.3rem 0.8rem", // Reduced button size
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              startIcon={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  style={{ width: 20, height: 20 }}
                />
              }
            >
              Sign in with GitHub
            </Button>

            {/* Privacy and Policy */}
            <Typography
              variant="body2"
              textAlign="center"
              color="textSecondary"
              sx={{ marginTop: "1rem", fontSize: "0.8rem" }}
            >
              By signing in, you agree to our{" "}
              <Typography
                component="span"
                sx={{ color: "#08C2FF", cursor: "pointer" }}
              >
                Privacy and Policy
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signin;
