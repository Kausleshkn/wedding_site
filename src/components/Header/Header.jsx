import React from 'react'

export default function Header() {
    return (
        <>
            <div className="collapse" id="searcharea">
                {/* top search */}
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Search</button>
                    </span>
                </div>
            </div>
            {/* /.top search */}
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 top-message">
                            <p>Welcome to Perfectsangam.</p>
                        </div>
                        <div className="col-md-6 top-links">
                            <ul className="listnone">
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Pricing</a></li>
                                {/* <li><a href="signup-couple.html" className="">I m couple</a></li> */}
                                {/* <li><a href="signup-vendor.html">Are you vendor?</a></li> */}
                                <li><a href="#">Log in</a></li>
                                <li>
                                    <a role="button" data-toggle="collapse" href="#searcharea" aria-expanded="false" aria-controls="searcharea"> <i className="fa fa-search"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 logo">
                            <div className="navbar-brand">
                                <a href="#"><img src="/img/logo1perfect.png" style={{ height: "125px", padding: "15px 5px", marginTop: "-40px" }} alt="Wedding Vendors" className="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <div className="navigation" id="navigation">
                                <ul>
                                    <li className="active"><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#" title="Home" className="animsition-link">Profiles</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
