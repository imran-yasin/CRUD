import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
const Update = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [check, setCheck] = useState();
  useEffect(() => {
    setFname(localStorage.getItem("fName"));
    setLname(localStorage.getItem("lName"));
    setMobile(localStorage.getItem("mobile"));
    setCheck(localStorage.getItem("check").toString());
  }, []);
  const UpdateData = () => {
    axios
      .post(`https://63ae8568ceaabafcf17bd171.mockapi.io/fakeData`, {
        fName,
        lName,
        mobile,
        check,
      })
      .catch(console.error());
  };

  return (
    <Form>
      <h2>Create User</h2>
      <Form.Field>
        <label>First Name</label>

        <input
          onChange={(e) => {
            setFname(e.target.value);
          }}
          placeholder="First Name"
          value={fName}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="Last Name"
          value={lName}
        />
      </Form.Field>
      <Form.Field>
        <label>Mobile Number</label>
        <input
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="Enter Mobile Number"
          value={mobile}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          //   onChange={(e) => {
          //     setCheck(e.target.value);
          //   }}
          label="I agree to the Terms and Conditions"
          value={check}
        />
      </Form.Field>
      <Button onClick={UpdateData} type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Update;
