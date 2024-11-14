import { NavLink } from "react-router-dom"

export default function Navbar() {
    return(<>
<>
  <nav className="navbar navbar-expand-md fixed-top" id="mainNav" style={{ background: "var(--bs-emphasis-color)", marginBottom: 60 }}>
    <div className="container">
      <NavLink to="/" className="navbar-brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-infinity text-white"
          style={{ fontSize: 34 }}
        >
          <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
        </svg>
      </NavLink>
      <button
        data-bs-toggle="collapse"
        className="navbar-toggler"
        data-bs-target="#navbarResponsive"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        value="Menu"
      >
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item nav-link">
            <NavLink to="/about-me" className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}>
              About ME
            </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/testimonials" className="nav-link">
              testimonials
            </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/services" className="nav-link" href="#contact">
              services
            </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/contact-me" className="nav-link" style={{paddingRight: 40}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  fontSize: 39,
                  color: "rgb(255,255,255)",
                  borderStyle: "none",
                  position: "absolute",
                  display: "inline",
                  height: "38.9881px",
                  paddingLeft: 0,
                  marginLeft: 72,
                  marginTop: "-8px",
                  marginBottom: 0,
                  width: "31.9881px"
                }}
              >
                <path
                  d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                  fill="currentColor"
                />
              </svg>
              hire me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>

    </>)
}