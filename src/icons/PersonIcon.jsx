import {
  Box,
  Button,
  IconButton,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PersonIcon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [orderNumber, setOrderNumber] = useState("");
  const nav = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <PersonOutlineIcon className="text-gray-600 " />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <Typography variant="subtitle1" gutterBottom>
            Find Order
          </Typography>
          <TextField
            fullWidth
            required
            variant="outlined"
            size="small"
            placeholder="Enter order number"
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => {
              if (orderNumber.trim()) {
                nav(`/order/${orderNumber.toUpperCase()}`);
                setAnchorEl(null); // close popover
              }
            }}
          >
            Search
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default PersonIcon;
