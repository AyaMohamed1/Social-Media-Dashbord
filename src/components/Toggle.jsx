import Form from "react-bootstrap/Form";
import { useState } from "react";

function Toggle(props) {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    props.handleDarkMode(!selected);
    setSelected(!selected);
  };
  return (
    <Form className="d-flex">
      <label id="toggle-label" className="mx-2 mt-1 text-secondary bold-text">
        Dark Mode
      </label>
      <Form.Check
        type="switch"
        id="toggle"
        checked={selected}
        onChange={handleChange}
      />
    </Form>
  );
}

export default Toggle;
