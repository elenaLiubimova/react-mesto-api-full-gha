const Footer = () => {
  return (
    <footer className="footer container">
      <p className="footer__info" lang="en">
        &copy; {new Date().getFullYear()} Mesto Russia
      </p>
    </footer>
  );
};

export default Footer;
