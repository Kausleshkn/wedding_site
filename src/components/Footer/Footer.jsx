import './Footer.css';
import "../../fontawesome.css";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 ft-aboutus">
                            <a href="#">
                                <img src="/img/logo.png" alt="Wedding Vendors" className="img-responsive" />
                            </a>

                            <p>At Wedding Vendor our purpose is to help people find great online network connecting wedding suppliers and wedding couples who use those suppliers.
                            </p>
                            <a href="#" className="custom-btn">Find A Vendor</a>
                        </div>
                        <div className="col-md-3 ft-link">
                            <h2>Useful links</h2>
                            <ul><li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact us</a></li>

                                <li><a href="#">Profiles</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 newsletter">
                            <h2>Subscribe for Newsletter</h2>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter E-Mail Address" required />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Submit</button>
                                    </span>
                                </div>
                            </form>
                            <div className="social-icon">
                                <h4>Be Social &amp; Stay Connected</h4>
                                <ul>
                                    <li><a href="#">
                                    <i className="fa-brands fa-facebook"></i>
                                        </a></li>
                                    <li><a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                        </a></li>
                                    <li><a href="#">
                                    <i className="fa-brands fa-tiktok"></i>
                                        </a></li>
                                    <li><a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                        </a></li>
                                    <li><a href="#">
                                        <i className="fa-brands fa-pinterest"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tiny-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">Copyright © 2024. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </>
    )
}
