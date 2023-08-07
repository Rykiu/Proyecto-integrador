import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footCont">
        <footer>
          <div className="redes">
            <ul>
              <li>
                <a href="/">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <em>&#169; Misiotrónica 2023</em>
        </footer>
      </div>
    </>
  );
}

export default Footer;
