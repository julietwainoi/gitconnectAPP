import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-900 text-white text-center p-4 mt-auto">
            <div className="container mx-auto px-4">
                {/* Top Section: Links and Social Media */}
                <div className="flex flex-wrap justify-between items-center mb-6">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-blue-500">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="https://twitter.com" className="hover:text-blue-300">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="https://instagram.com" className="hover:text-pink-500">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-700">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-600 mb-6" />

                {/* Bottom Section: Copyright and Back to Top */}
                <div className="flex justify-between items-center">
                    <p className="text-sm">© {year} Your Company. All Rights Reserved.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-sm text-gray-400 hover:text-white"
                    >
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
