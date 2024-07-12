import './Header.css';
import "../../fontawesome.css";

export default function Header() {
    return (
        <>
            <div className="collapse" id="searcharea">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Search</button>
                    </span> </div>
            </div>
            <div className="navbar-fixed-top header custom-header">
                <div className="top-bar-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 top-message">
                                <p>Welcome to Wedding Vendor.</p>
                            </div>
                            <div className="col-md-6 top-links">
                                <ul className="listnone">
                                    <li><a href="#"> Help </a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">I m couple</a></li>
                                    <li><a href="#">Are you vendor?</a></li>
                                    <li><a href="#">Log in</a></li>
                                    <li>
                                        <a role="button" data-toggle="collapse" href="#searcharea" aria-expanded="false" aria-controls="searcharea"> <i className="fa fa-search"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bottam-nav">
                    <div className="row">
                        <div className="col-md-3 logo">
                            <div className="navbar-brand">
                                <a href="#">
                                    <img src="/img/logo.png" alt="Wedding Vendors" className="img-responsive" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="navigation" id="navigation">
                                <ul>
                                    <li className="active"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="#" title="Home" className="animsition-link">Home</a></li>
                                            <li><a href="#" title="Home v.2" className="animsition-link">Home v.2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Listing</a>
                                        <ul>
                                            <li><a href="#" title="Home" className="animsition-link">List / Half Map</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">List / Sidebar Left</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">List / No Sidebar</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">Top Map / List</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">4 Column List</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">3 Column List</a></li>
                                            <li><a href="#" title="Home" className="animsition-link">Horizontal List </a></li>
                                            <li><a href="#" title="Home" className="animsition-link">List Variations </a></li>
                                            <li><a href="#">Bubba Style Listing</a></li>
                                            <li><a href="#">Ocean Style Listing</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Vendor</a>
                                        <ul>
                                            <li><a href="#">Vendor Simple</a></li>
                                            <li><a href="#">Vendor Tabbed</a></li>
                                            <li><a href="#">Vendor Profile</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" title="Home" className="animsition-link">Suppliers</a>
                                        <ul>
                                            <li><a href="#">Venue List</a></li>
                                            <li><a href="#">Photographer List</a></li>
                                            <li><a href="#">Dresses List</a></li>
                                            <li><a href="#">Florist List</a></li>
                                            <li><a href="#">Videography List</a></li>
                                            <li><a href="#">Cake List</a></li>
                                            <li><a href="#">Music List</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Planning Tools</a>
                                        <ul>
                                            <li><a href="#">To Do List</a></li>
                                            <li><a href="#">Budget Planner</a></li>
                                            <li><a href="#">Couple Signup (LP)</a></li>
                                            <li><a href="#">Couple Admin</a></li>
                                            <li><a href="#">Vendor Admin</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Features</a>
                                        <ul>
                                            <li><a href="#">Blog</a>
                                                <ul>
                                                    <li><a href="#">Blog Listing</a></li>
                                                    <li><a href="#">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Pricing Table</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">404 Error</a></li>
                                            <li><a href="#">Shortcodes</a>
                                                <ul>
                                                    <li><a href="#">Column</a></li>
                                                    <li><a href="#">Accordion</a></li>
                                                    <li><a href="#">Tabs</a></li>
                                                    <li><a href="#">Paginations</a></li>
                                                    <li><a href="#">Typography</a></li>
                                                    <li><a href="#">Accordion</a></li>
                                                    <li><a href="#">Alert</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Template Guideline</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Real Weddings</a>
                                        <ul>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Real Wedding Single</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
