import React, { useState } from "react";

function AddDivForm() {
  const [divs, setDivs] = useState([]);
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { height, width, backgroundColor } = formData;

    if (!height || !width || !backgroundColor) {
      alert("Please fill out all fields!");
      return;
    }


    setDivs([...divs, { height, width, backgroundColor }]);


    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <h2>Add Div</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>
            Height (px):
            <input
             
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Width (px):
            <input
           
              name="width"
              value={formData.width}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Background Color:
            <input
              type="text"
              name="backgroundColor"
          
              value={formData.backgroundColor}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Div</button>
      </form>

      <div>
        <h3>Generated Divs</h3>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.backgroundColor,
              margin: "10px 0",
              display: "inline-block",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AddDivForm;
