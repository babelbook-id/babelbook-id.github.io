const main = {
  view: () => {
    return (
      <div id="wrapper">
        <header id="header">
          <a href="index.html" className="logo">
            <strong>Babelbook</strong> <span>baca beli buku</span>
          </a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>
        <nav id="menu">
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="landing.html">Landing</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
          </ul>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button primary fit">
                Get Started
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Log In
              </a>
            </li>
          </ul>
        </nav>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Babelbook</h1>
              </header>
              <span className="image main">
                <img src="theme/html5up-forty/images/pic11.jpg" alt="" />
              </span>
              <p>
                Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
                auctor sit amet. Pellentesque leo mauris, consectetur id ipsum
                sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada
                et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar
                mauris. Curabitur sapien risus, commodo eget turpis at,
                elementum convallis elit. Pellentesque enim turpis, hendrerit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Etiam
                tristique libero eu nibh porttitor fermentum. Nullam venenatis
                erat id vehicula viverra. Nunc ultrices eros ut ultricies
                condimentum. Mauris risus lacus, blandit sit amet venenatis non,
                bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam
                at, euismod in lectus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. In non
                lorem sit amet elit placerat maximus. Pellentesque aliquam
                maximus risus, vel sed vehicula.
              </p>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
                Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
                Pellentesque leo mauris, consectetur id ipsum sit amet,
                fersapien risus, commodo eget turpis at, elementum convallis
                elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum
                dolor.
              </p>
            </div>
          </section>
        </div>
        <section id="contact">
          <div className="inner">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" className="primary" />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form>
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope"></span>
                  <h3>Email</h3>
                  <a href="#">information@untitled.tld</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone"></span>
                  <h3>Phone</h3>
                  <span>(000) 000-0000 x12387</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home"></span>
                  <h3>Address</h3>
                  <span>
                    1234 Somewhere Road #5432
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States of America
                  </span>
                </div>
              </section>
            </section>
          </div>
        </section>
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a href="#" className="icon brands alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands alt fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>&copy; Babelbook. 2023</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  },
};
