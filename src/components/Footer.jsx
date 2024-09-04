const Footer = () => {
  return (
    <footer className="footer mt-8 bg-gray-900 text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* About Section */}
          <div className="footer-about">
            <h2 className="text-center md:text-left text-base md:text-2xl mb-3 md:mb-4">
              About MoviesMod
            </h2>
            <p className="text-center md:text-left text-sm md:text-base">
              MoviesMod is your ultimate destination to explore and discover
              movies, series, and the latest trailers. With detailed information
              and reviews, you can find your next favorite movie with ease.
            </p>
            <div className="social-links mt-3 flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/jainul-ansari-9a1434261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin text-blue-700 hover:underline text-lg"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/jainul.62?igsh=MXByaW5xbmU3eG8zZg=="
                className="instagram text-pink-400 hover:underline text-lg"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="footer-contact mt-1 md:mt-0">
            <h4 className="text-center md:text-left text-base md:text-2xl mb-3 md:mb-4">
              Contact Us
            </h4>
            <p className="text-center md:text-left text-sm md:text-base">
              We'd love to hear from you! For any inquiries, feedback, or just
              to say hello, feel free to reach out to us.
            </p>
            <p className="mt-2 text-center md:text-left">
              <a
                href="mailto:jainulansari579@gmail.com"
                className="text-blue-600 hover:underline"
              >
                Click here to contact us
              </a>
            </p>
            <p className="text-center md:text-left text-xs md:text-sm text-gray-400 mt-3 md:mt-4">
              We’ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="foot-container mt-6 md:mt-8 text-center border-t border-gray-700 pt-4">
          <div className="copyright text-xs md:text-base text-gray-400">
            &copy; Copyright{" "}
            <strong>
              <span>MoviesMod</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits text-xs md:text-base text-gray-400 mt-2">
            Designed by{" "}
            <a
              href="https://www.instagram.com/jainul.62?igsh=MXByaW5xbmU3eG8zZg=="
              className="hover:underline"
            >
              Abedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
