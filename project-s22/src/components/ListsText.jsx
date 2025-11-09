const ListText = ({ items }) => {
  return (
    <li>
      <p className={items.classN}>{items.desc}</p>
    </li>
  );
};

export default ListText;
