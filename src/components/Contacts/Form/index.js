import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  //Bir kayıt eklendiyse inputun içini temizle.
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //Form tagindeki onSubmit işleminde datayı aldıktan sonra sayfayı yeniliyor.
    //event.preventDefault() işleminde varsayılan işlemi durdurabiliriz.
    e.preventDefault();

    //Formdaki isim veya numara alanı boş olduğu zaman return false yaparak işlemi keser.
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
    //setForm(initialFormValues);
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>

        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
