export const About = () => {
    return (
        <div className="container my-5">
            <div className="about-container">
                <h1 className="text-center mb-4">About ShopHub</h1>

                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2>Our Mission</h2>
                        <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                            At ShopHub, we believe in bringing the best shopping experience to your fingertips.
                            Our mission is to provide quality products at affordable prices with exceptional customer service.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2>Why Choose Us?</h2>
                        <ul style={{ fontSize: "1.1rem", lineHeight: "2" }}>
                            <li>🚀 Fast & Reliable Shipping</li>
                            <li>💯 Quality Guaranteed</li>
                            <li>🔒 Secure Payments</li>
                            <li>📞 24/7 Customer Support</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 text-center mb-4">
                        <div className="p-4" style={{ background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E72 100%)", borderRadius: "12px", color: "white" }}>
                            <h3 style={{ fontSize: "2.5rem" }}>10M+</h3>
                            <p style={{ fontSize: "1.1rem" }}>Happy Customers</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="p-4" style={{ background: "linear-gradient(135deg, #4ECDC4 0%, #00D9FF 100%)", borderRadius: "12px", color: "white" }}>
                            <h3 style={{ fontSize: "2.5rem" }}>50K+</h3>
                            <p style={{ fontSize: "1.1rem" }}>Products Available</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="p-4" style={{ background: "linear-gradient(135deg, #FFE66D 0%, #FFC93C 100%)", borderRadius: "12px", color: "#2D3436" }}>
                            <h3 style={{ fontSize: "2.5rem" }}>99%</h3>
                            <p style={{ fontSize: "1.1rem" }}>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}