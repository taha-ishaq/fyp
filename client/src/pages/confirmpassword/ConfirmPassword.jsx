import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ConfirmPassword = () => {
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
          flexDirection: { xs: "column-reverse", md: "row" },
          height: "100vh",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Left Section - Image with Typography */}
        <Box
          sx={{
            flex: 1,
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            height: { xs: "200px", sm: "250px", md: "auto" },
            position: "relative",
            backgroundImage: `url('login.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { lg: "10px 0 0 10px", xs: "10px" },
          }}
        >
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
                fontSize: {
                  xs: "1.8rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              HIVE
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              Secure Your Account
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
              Update your password for enhanced security and a better
              experience.
            </Typography>
          </Box>
        </Box>

        {/* Right Section - Update Fields */}
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pr: { lg: "80px", xs: "10px", md: "30px", sm: "80px" },
            pl: { lg: "80px", xs: "10px" },
            pt: { lg: "20px", xs: "10px" },
            pb: { lg: "20px", xs: "10px" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: { lg: "50%", xs: "100%", md: "100%", sm: "100%" },
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              padding: "1rem",
              gap: "0.5rem",
              backgroundColor: "#fff",
            }}
          >
            {/* Update Your Password */}
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="start"
              sx={{ marginBottom: "0.5rem", fontSize: "1.4rem" }}
            >
              Update Your Password
            </Typography>
            <Typography
              variant="body2"
              textAlign="start"
              sx={{ marginBottom: "1rem", fontSize: "0.9rem" }}
            >
              Please fill out the fields below to update your password.
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Typography
                component="label"
                htmlFor="new-password"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "0.3rem",
                  textAlign: "start",
                  display: "block",
                  fontSize: "0.9rem",
                }}
              >
                New Password
              </Typography>
              <TextField
                id="new-password"
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "10px",
                    },
                    "&:hover fieldset": { borderColor: "#08C2FF" },
                    "&.Mui-focused fieldset": { borderColor: "#08C2FF" },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                  },
                }}
              />
            </Box>

            {/* Confirm Password Field */}
            <Box sx={{ width: "100%" }}>
              <Typography
                component="label"
                htmlFor="confirm-password"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "0.3rem",
                  textAlign: "start",
                  display: "block",
                  fontSize: "0.9rem",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                id="confirm-password"
                fullWidth
                type={showPassword ? "text" : "password"}
                variant="outlined"
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "10px",
                    },
                    "&:hover fieldset": { borderColor: "#08C2FF" },
                    "&.Mui-focused fieldset": { borderColor: "#08C2FF" },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                  },
                }}
              />
            </Box>

            {/* Update Button */}

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#08C2FF",
                borderRadius: "7px",
                color: "#fff",
                mt: "20px",
                padding: "0.6rem",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#08A2E5" },
              }}
            >
              Update Password
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ConfirmPassword;
