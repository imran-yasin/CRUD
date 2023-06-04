import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { Button } from "semantic-ui-react";
// const Read = () => {
//   const [getName, setName] = useState([]);
//   const getData = () => {
//     axios
//       .get("https://63ae8568ceaabafcf17bd171.mockapi.io/fakeData")
//       .then((res) => {
//         setName(res.data);
//       })
//       .catch((err) => {
//         console.log("could not fetch data", err);
//       });
//   };
//   return (
//     <div>
//       <h2>Read User</h2>
//       {getName.map((name, index) => {
//         return (
//           <div key={index}>
//             <p>First Name is : {name.fName}</p>
//             <p>Last Name is : {name.lName}</p>
//             <p>Are you Value User : {name.check.toString()}</p>
//           </div>
//         );
//       })}
//       <Button onClick={getData}>Click me</Button>
//     </div>
//   );
// };

// export default Read;

export default function Read() {
  const [getName, setName] = useState([]);
  const getData = () => {
    axios
      .get("https://63ae8568ceaabafcf17bd171.mockapi.io/fakeData")
      .then((res) => {
        setName(res.data);
      })
      .catch((err) => {
        console.log("could not fetch data", err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`https://63ae8568ceaabafcf17bd171.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (fName, lName, mobile, check) => {
    localStorage.setItem("fName", fName);
    localStorage.setItem("lName", lName);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("check", check);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <h2>Read Operataion</h2>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>#Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Premium User</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getName.map((name, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>{name.id}</TableCell>
                  <TableCell>{name.fName}</TableCell>
                  <TableCell>{name.lName}</TableCell>
                  <TableCell>{name.mobile}</TableCell>
                  <TableCell>{name.check.toString()}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        return handleDelete(name.id);
                      }}
                    >
                      Delte
                    </Button>
                  </TableCell>
                  <TableCell>
                    <NavLink to="/update">
                      <Button
                        onClick={() => {
                          setToLocalStorage(
                            name.id,
                            name.fName,
                            name.lName,
                            name.mobile,
                            name.check
                          );
                        }}
                      >
                        Edit
                      </Button>
                    </NavLink>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
