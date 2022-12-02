import "./AddPost.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import * as React from "react";

function AddPost(props) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return props.trigger ? (
    <>
      <div className="popup">
        <div className="popup-inner">
          <div className="addpost-form">
            <TextField
              id="title"
              label="Title"
              type="text"
              variant="outlined"
              helperText="Please enter your  first name"
              autoComplete="off"
              margin="normal"
              sx={{ m: 1, width: 500 }}
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
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
export default AddPost;
