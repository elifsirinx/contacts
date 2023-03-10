import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  /** Filtreleme işleminin yapıldığı fonksiyon: fullname ve phone_number keylerinden herhangi biri filterText
   * içinde geçiyorsa onu getirir.* */
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    }); //item key : fullname ve phone_number
  });

  //console.log(filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname} </span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
