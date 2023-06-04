import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
const Create = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [check, setCheck] = useState(false);
  const postData = () => {
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
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="Last Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Mobile Number</label>
        <input
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="Enter Mobile Number"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          onChange={(e) => {
            setCheck(!check);
          }}
          label="I agree to the Terms and Conditions"
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
