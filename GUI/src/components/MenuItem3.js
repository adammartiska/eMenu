import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";
import "./MenuItem.css";
import { Box } from "@mui/system";
//import { makeStyles } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//   expandable: {
//     backgroundColor: theme.palette.main.darker,
//   },
// }));

const MenuItem3 = ({ name, price }) => {
  //const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "primary.main",
        borderRadius: 4,
      }}
    >
      <Button
        onClick={() => setExpanded(!expanded)}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        fullWidth
        //variant="contained"
      >
        <div>{name}</div>
        <div>{price}</div>
      </Button>
      {expanded && (
        <div className="expanded-content">
          <ButtonGroup
            sx={{
              height: 30,
            }}
            size="small"
            variant="contained"
          >
            <IconButton
              size="small"
              aria-label="delete"
              color="primary"
              sx={{
                width: 30,
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Button
              disabled
              sx={{
                "&.Mui-disabled": {
                  bgcolor: "primary.dark",
                  color: "white",
                },
              }}
            >
              0
            </Button>
            <IconButton
              aria-label="delete"
              color="primary"
              sx={{
                width: 30,
              }}
            >
              <AddIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      )}
    </Box>
  );
};

export default styled(MenuItem3)(({ theme }) => ({
  color: "#ccc",
  backgroundColor: theme.palette.primary.main,
  // padding: theme.spacing(1),
  // borderRadius: theme.shape.borderRadius,
}));
