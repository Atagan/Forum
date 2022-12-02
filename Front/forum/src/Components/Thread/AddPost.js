import "./AddPost.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { purple, common } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import FormControlLabel from '@mui/material/FormControlLabel';


const AddPost = (props) => {
  // Switches categories
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


    

  return (props.trigger) ? (
    <>
    {/* <form onSubmit={submitHandler}> */}
      <div className="popup">
        <div className="popup-inner">
          <div className="addpost-form">
            <div >
          <Button className="cancel-button" sx={{ mt: 3, mb: 2, minWidth: "20" }} onClick={() => props.setTrigger(false)}>Cancel</Button>
          </div>
            <TextField
              fullWidth
              id="title"
              label="Title"
              type="text"
              variant="outlined"
              helperText="Please enter your  first name"
              autoComplete="off"
              margin="normal"
              // value={enteredTitle}
              // onChange={titleChangeHandler}
            />
            <button className="checkbutton">
              <span
                class="material-icons"
                onClick={() => props.setTrigger(false)}
              >
                check_circle
              </span>
            </button>
            <div className="post-form">
              <div className="radiobuttons">
                <div className="category-icon">
                  <span class="material-icons">help_outline</span>
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div className="category-icon">
                  <span class="material-icons">campaign</span>
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>
                <div className="category-icon">
                  <span class="material-icons">edit</span>
                  <Radio
                    checked={selectedValue === "c"}
                    onChange={handleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "C" }}
                  />
                </div>
              </div>
              <div className="written-form">
                <TextField
                  fullWidth
                  id="written-form"
                  label="Write the post here"
                  multiline
                  rows={5}
                  defaultValue=""
              //     value={enteredBody}
              // onChange={bodyChangeHandler}
                />
              </div>
              <div className="bannedwords-button">
                <Button
                  onClick={() => props.setTrigger(false)}
                  variant="outlined"
                >
                  Check if you were a good boi
                </Button>
              </div>
              <div className="sendpost-form">
                <Button
                  className="checkbutton"
                  // variant="contained"
                  sx={{ mt: 3, mb: 2, minWidth: "20" }}
                >
                  Submit
                </Button>
                <div className="switch">
                <FormControlLabel control={<Switch defaultChecked />} label="Public" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  ) : (
    ""
  );
};
// }
export default AddPost;
