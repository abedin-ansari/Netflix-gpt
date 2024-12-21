const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Audio Description
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Code Button */}
        <button className="border border-gray-400 px-4 py-2 mb-8 hover:text-white transition-colors">
          Service Code
        </button>

        {/* Copyright */}
        <div className="text-sm">
          <p>© 1997-{new Date().getFullYear()} Netflix GPT, Inc.</p>
          <p className="mt-2">
            Netflix GPT is a demo project created for learning purposes. All
            movie data is provided by TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
