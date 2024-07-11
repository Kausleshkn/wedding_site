import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 ft-aboutus">
                            <a href="#">
                                <img src="/img/logo1perfect.png" style={{ height: "125px", padding: " 15px 5px", marginTop: "-40px" }} alt="Wedding Vendors" className="img-responsive" />
                            </a>

                            <p>At Perfect Sangam, our mission is to connect individuals through our matrimony site, fostering meaningful relationships and lifelong partnerships.
                            </p>
                            <a href="#" className="btn btn-default">Find Your Partner</a>
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
                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-flickr"></i></a></li>
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
