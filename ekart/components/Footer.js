import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-700 py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Section 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                            <li><a href="#">Ekart Cares</a></li>
                            <li><a href="#">Gift a Smile</a></li>
                        </ul>
                    </div>
                    {/* Section 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    {/* Section 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Sell on Ekart</a></li>
                            <li><a href="#">Sell under Ekart Accelerator</a></li>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Self-Publish with Us</a></li>
                        </ul>
                    </div>
                    {/* Section 4 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
                        <ul className="space-y-2">
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Returns Centre</a></li>
                            <li><a href="#">100% Purchase Protection</a></li>
                            <li><a href="#">Ekart App Download</a></li>
                            <li><a href="#">Ekart Assistant Download</a></li>
                        </ul>
                    </div>
                </div>
                {/* Company Info */}
                <div className="mt-8 text-gray-900 text-sm">
                    <p>© 2024 Ekart.com, Inc. or its affiliates</p>
                    <p className="mt-2">Made with ❤️ by Your Company</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
