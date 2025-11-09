const HeaderLinks = ({ HLink }) => {
  return (
    <li>
      <a className={HLink.classN} href={HLink.href} title={HLink.title}>
        {HLink.text}
      </a>
    </li>
  );
};

export default HeaderLinks;
