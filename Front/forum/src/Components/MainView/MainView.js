import * as React from "react";
import {useState} from 'react';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddPostButton from "../Thread/AddPostButton";


function createData(threadTitle) {
    
  return {
    threadTitle,
    history: [
      {
        title: "Post title",
        category: "Question",
        body: "Lorem ipsum dolor sit amet consectetur adipiscing elit tempor condimentum, imperdiet id malesuada neque montes nibh integer porta lobortis lectus, quam ad mus magna a habitasse dictum ac. Dapibus eget egestas penatibus ante fermentum pretium gravida nunc class ut scelerisque, accumsan volutpat consequat risus venenatis fringilla facilisis per aliquam et.",
      },
      {
        title: "Post title",
        category: "Question",
        body: "Lorem ipsum dolor sit amet consectetur adipiscing elit tempor condimentum, imperdiet id malesuada neque montes nibh integer porta lobortis lectus, quam ad mus magna a habitasse dictum ac. Dapibus eget egestas penatibus ante fermentum pretium gravida nunc class ut scelerisque, accumsan volutpat consequat risus venenatis fringilla facilisis per aliquam et.",
      },
      {
        title: "Post title",
        category: "Question",
        body: "Lorem ipsum dolor sit amet consectetur adipiscing elit tempor condimentum, imperdiet id malesuada neque montes nibh integer porta lobortis lectus, quam ad mus magna a habitasse dictum ac. Dapibus eget egestas penatibus ante fermentum pretium gravida nunc class ut scelerisque, accumsan volutpat consequat risus venenatis fringilla facilisis per aliquam et.",
        button: "Add post",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    
    <>
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ width: 10 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.threadTitle}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Posts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Body</TableCell>
                    <TableCell>
                        <AddPostButton className="addbutton" trigger={buttonPopup} setTrigger={setButtonPopup}></AddPostButton>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.title}>
                      <TableCell component="th" scope="row">
                        {historyRow.title}
                      </TableCell>
                      <TableCell>{historyRow.category}</TableCell>
                      <TableCell align="left">{historyRow.body}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
    </>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData("Thread Title"),
  createData("Thread Title"),
  createData("Thread Title"),
  createData("Thread Title"),
  createData("Thread Title"),
  createData("Thread Title"),
  createData("Thread Title"),
];

export default function MainView() {
    // const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <TableContainer component={Paper} sx={{ width: 1000, margin: 10 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>North to South Forum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.threadTitle} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
