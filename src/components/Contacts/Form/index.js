import { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //Form tagindeki onSubmit işleminde datayı aldıktan sonra sayfayı yeniliyor.
    //event.preventDefault() işleminde varsayılan işlemi durdurabiliriz.
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="number"
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </div>

        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
