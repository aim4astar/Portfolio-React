export default function AboutMe() {

    return (<>
        <>
  <header
    className="masthead"
    style={{
      backgroundImage: 'url("assets/img/intro-bg.jpg")',
      paddingTop: 84,
    }}
  >
    <div className="intro-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="brand-heading">About me</h1>
            <p className="intro-text">
              A free, responsive, one page Bootstrap theme.
              <br />
              Created with love.
            </p>
            <a className="btn btn-link btn-circle" role="button" href="#about">
              <i className="fa fa-angle-double-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="text-center content-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About grayscale</h2>
          <p>
            Grayscale is a free Bootstrap theme. It can be yours right now,
            simply download the template on&nbsp;
            <a href="#">the preview page</a>. The theme is open source, and you
            can use it for any purpose, personal or commercial.
          </p>
          <p>
            This theme features stock photos by&nbsp;
            <a href="#">Gratisography</a>&nbsp;along with a custom Google Maps
            skin courtesy of&nbsp;<a href="#">Snazzy Maps</a>.
          </p>
          <p>
            Grayscale includes full HTML, CSS, and custom JavaScript files along
            with SASS and LESS files for easy customization!
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    className="text-center download-section content-section"
    id="education"
    style={{ backgroundImage: 'url("assets/img/downloads-bg.jpg")' }}
  >
    <div className="container">
      <div className="col-lg-8 mx-auto">
        <h1>Education</h1>
        <div className="carousel slide" data-bs-ride="false" id="carousel-1">
          <div
            className="carousel-inner"
            style={{ borderRadius: 24, opacity: 1, width: "inherit" }}
          >
            <div
              className="carousel-item active"
              style={{ position: "relative", opacity: 1 }}
            >
              <img
                className="w-100 d-block"
                src="assets/img/msu-final.jpeg"
                alt="Slide Image"
                width={329}
                height={191}
                style={{ opacity: "0.40" }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%)"
                }}
              >
                MSU
              </p>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                src="assets/img/university-of-pittsburgh-blue-panther-desktop.jpg"
                alt="Slide Image"
                width={329}
                height={191}
                style={{ opacity: "0.60" }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%)"
                }}
              >
                PITT
              </p>
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-1"
              data-bs-slide-to={0}
              className="active"
            />{" "}
            <button
              type="button"
              data-bs-target="#carousel-1"
              data-bs-slide-to={1}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="text-center content-section" id="experience">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>EXperience</h2>
        </div>
      </div>
    </div>
    <div className="container py-4 py-xl-5">
      <div className="row">
        <div className="col-md-8 col-xl-6 mx-auto p-4">
          <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
            <div
              className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl"
              style={{
                background:
                  'url("assets/img/galena.jpg") center / contain no-repeat'
              }}
            >
              <div
                style={{
                  background:
                    'url("assets/img/galena.jpg") center / contain no-repeat',
                  borderRadius: "50%"
                }}
              />
            </div>
            <div>
              <h4>Title</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <p>Date</p>
              <p />
            </div>
          </div>
          <hr className="my-5" />
          <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
            <div
              className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center order-last ms-4 d-inline-block bs-icon xl"
              style={{
                background:
                  'url("assets/img/mercy.jpg") center / cover no-repeat',
                borderRadius: "50%"
              }}
            />
            <div>
              <h4>Title</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <p>Date</p>
              <p />
              <p />
            </div>
          </div>
          <hr className="my-5" />
          <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
            <div
              className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl"
              style={{
                background:
                  'url("assets/img/pitt-logo-exp.png") center / contain no-repeat'
              }}
            >
              <div
                style={{
                  background:
                    'url("assets/img/galena.jpg") center / contain no-repeat',
                  borderRadius: "50%"
                }}
              />
            </div>
            <div>
              <h4>Title</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <p>Date</p>
              <p />
            </div>
          </div>
          <hr className="my-5" />
          <div className="d-flex align-items-center align-items-md-start align-items-xl-center">
            <div
              className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center order-last ms-4 d-inline-block bs-icon xl"
              style={{
                background:
                  'url("assets/img/Trees%20Hall.jpg") center / cover no-repeat',
                borderRadius: "50%"
              }}
            />
            <div>
              <h4>Title</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
              <p>Date</p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div />
</>

    </>)
}