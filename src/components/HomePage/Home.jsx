import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import "../../fontawesome.css";

export default function Home() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease",
        fade: true,
    };



    const items = [

        {
            image: "/img/slider-1.jpg"
        },

        {
            image: "/img/slider-2.jpg"
        },

        {
            image: "/img/slider-3.jpg"
        }
    ];

    return (
        <>
            <div className="slider-bg">
                <Slider id="slider" className="owl-carousel owl-theme slider"
                    {...settings}>
                    {items.length > 0 && items.map((slide, index) => (
                        <div key={index} className="item slider-shade">
                            <img src={slide.image} alt="Wedding couple just married" style={{ width: "100%" }} />
                        </div>
                    ))}
                </Slider>

                <div className="find-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 finder-block">
                                <div className="finder-caption">
                                    <h1>Find your perfect Wedding Vendor</h1>
                                    <p>Over <strong>1200+ Wedding Vendor </strong>for you special date &amp; Find the perfect venue &amp; save you date.</p>
                                </div>
                                <div className="finder-form-transparent">
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <select className="form-control">
                                                    <option>Select Vendor Category</option>
                                                    <option value="Venue">Venue</option>
                                                    <option value="Photographer">Photographer</option>
                                                    <option value="Cake">Cake</option>
                                                    <option value="Dj">Dj</option>
                                                    <option value="Florist">Florist</option>
                                                    <option value="Videography">Videography</option>
                                                    <option value="jewellery">Jewellery</option>
                                                    <option value="Gifts">Gifts</option>
                                                    <option value="Dresses">Dresses</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <select className="form-control">
                                                    <option>Select City</option>
                                                    <option value="Ahmedabad">Ahmedabad</option>
                                                    <option value="Gandhinagar">Gandhinagar</option>
                                                    <option value="Rajkot">Rajkot</option>
                                                    <option value="Surat">Surat</option>
                                                    <option value="Vadodara">Vadodara</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <button type="submit">Find Vendors</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.Find search section*/}

            {/* Person Profile */}

            <div className="section-space80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Plan your wedding one step at a time</h1>
                                <p>Simple wedding planning tools to help you stay on track. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="feature-block feature-center mb30">
                                <div className="feature-icon">
                                    <i className="fa-regular fa-calendar-days"></i>
                                </div>
                                <h2>Checklist</h2>
                                <p>Get your planning sorted with our free wedding planning checklist!</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature-block feature-center mb30">
                                <div className="feature-icon">
                                    <i className="fa-regular fa-newspaper"></i>
                                </div>
                                <h2>Budget Planner</h2>
                                <p>Budget estimator tool that lets you specify your program plan.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature-block feature-center mb30">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <h2>Guest list</h2>
                                <p>Build your free wedding guest list, collect mailing addresses and RSVPs.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="feature-block feature-center mb30">
                                <div className="feature-icon">
                                    <i className="fa-solid fa-receipt"></i>
                                </div>
                                <h2>Table Planer</h2>
                                <p>Easy online tool for creating seating arrangements for weddings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"> <a href="#" className="custom-home-btn">Get Started</a> </div>
                    </div>
                </div>
            </div>

            {/* Real Weddings */}

            <div className="section-space80 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>More than 2,000 Wedding Vendors</h1>
                                <p> Donec sagittis blandit ex consequat pulvin ondimentum tortor eitae suscipit augupibus </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#">
                                        <img src="/img/vendor-total-thumb-1.jpg" className="img-responsive" alt="" />
                                    </a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Venues </a><span className="badge badge-primary">12+</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#"><img src="/img/vendor-total-thumb-2.jpg" className="img-responsive" alt="" /></a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Cakes </a><span className="badge badge-primary">10+</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#"><img src="/img/vendor-total-thumb-3.jpg" className="img-responsive" alt="" /></a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Venues </a><span className="badge badge-primary">12+</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#"><img src="/img/vendor-total-thumb-4.jpg" className="img-responsive" alt="" /></a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Venues </a><span className="badge badge-primary">12+</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#"><img src="/img/vendor-total-thumb-5.jpg" className="img-responsive" alt="" /></a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Venues </a><span className="badge badge-primary">12+</span> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="vendor-total-list mb30">
                                <div className="vendor-total-thumb">
                                    <a href="#"><img src="/img/vendor-total-thumb-6.jpg" className="img-responsive" alt="" /></a>
                                </div>
                                <div className="well-box vendor-total-info">
                                    <h2 className="vendor-total-title"><a href="#" className="title">Wedding Venues </a><span className="badge badge-primary">12+</span> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"><a href="#" className="custom-home-btn">View All Vendor</a></div>
                    </div>
                </div>
            </div>


            {/* Be inspired by Real Weddings */}


            <div className="section-space80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Be inspired by Real Weddings</h1>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#"><img src="/img/real-wedding-1.jpg" alt="" className="img-responsive" /></a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Caitlin &amp; Hentze</a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i className="icon-wedding-day icon-size-18"></i> 5 june,2016</span> <span className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i> Surat, India</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#"><img src="/img/real-wedding-2.jpg" alt="" className="img-responsive" /></a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Lewers &amp; Isabella</a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i className="icon-wedding-day icon-size-18"></i> 4 june,2016</span> <span className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i> Surat, India</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#"><img src="/img/real-wedding-3.jpg" alt="" className="img-responsive" /></a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Castleton &amp; Sean </a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i className="icon-wedding-day icon-size-18"></i> 3 june,2016</span> <span className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i> Surat, India</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"><a href="#" className="custom-home-btn">View More Inspirations</a></div>
                    </div>
                </div>
            </div>

            {/* image caption section */}

            <section className="custom-parallax">
                <div className="custom-parallax-content">
                    <h2>Are you trying our planning tools ?</h2>
                    <p>
                        Donec sagittis blandit ex consequat pulvinm condimentum tortor lorem ipsum oleo sit ament eitae suscipit augupibus.
                    </p>
                    <a href="#" className="">Start Planning Today</a>
                </div>
            </section>

            {/* why choose us */}

            <div className="section-space80 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Most Reason to Why Choose us</h1>
                                <p>Donec sagittis blandit ex consequat pulvinm condimentum tortor eitae suscipit augupibus </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="well-box feature-block text-center">
                                <div className="feature-icon">
                                    <i className="fa-regular fa-heart"></i>
                                </div>
                                <div className="feature-info">
                                    <h3>20 Years Experiance</h3>
                                    <p>We are never short of suggestions or inspiring ideas.We will support you and advise you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well-box feature-block text-center">
                                <div className="feature-icon">
                                    <img src="/my-img-1.png" alt="couple" />
                                </div>
                                <div className="feature-info">
                                    <h3>100 real weddings</h3>
                                    <p>Every wedding is unique and has a special story. Share all the details of your special moments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well-box feature-block text-center">
                                <div className="feature-icon">
                                    <img src="/my-img-2.png" alt="vendor" />
                                </div>
                                <div className="feature-info">
                                    <h3>1500 + Wedding Suppliers</h3>
                                    <p> Sed semper sapien commodo iaculis nec quis lacus malesuada, icula tortor. ut turpiliquepellentesque. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}

            {/* <div className="section-space80 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Just Get Married Happy Couple</h1>
                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 tp-testimonial">

                            <Slider id="testimonial" className="owl-carousel owl-theme" {...settings3}>

                                <div className="item testimonial-block">
                                    <div className="couple-pic">
                                        <img src="/img/m1.jpeg" alt="" className="img-circle" />
                                    </div>
                                    <div className="feedback-caption">
                                        <p>Had our wedding on 15th may 2015 and have to say Jenny and the team made it a wonderful and enjoyable day were Notting was a problem from the build up to the day.</p>
                                    </div>
                                    <div className="couple-info">
                                        <div className="name">Saurabh &amp; Anjali</div>
                                        <div className="date">Thu, 21st June, 2015</div>
                                    </div>
                                </div>

                                <div className="item testimonial-block">
                                    <div className="couple-pic">
                                        <img src="/img/m2.jpeg" alt="" className="img-circle" />
                                    </div>
                                    <div className="feedback-caption">
                                        <p>Vestibulum vitae neque urna. Duis ut mauris mi. Sed vehicula vestibulum finias their default model text and a search for lorem ipsum will uncover manym elit posuerenia eget sem.</p>
                                    </div>
                                    <div className="couple-info">
                                        <div className="name">Aditya &amp; saumya</div>
                                        <div className="date">Thu, 13th July, 2015</div>
                                    </div>
                                </div>

                                <div className="item testimonial-block">
                                    <div className="couple-pic">
                                        <img src="/img/m3.jpeg" alt="" className="img-circle" />
                                    </div>
                                    <div className="feedback-caption">
                                        <p>Had our wedding on 15th Oct 2015 and have to say Jenny and the team made it a wonderful and enjoyable day were Notting was a problem from the build up to the day.</p>
                                    </div>
                                    <div className="couple-info">
                                        <div className="name">Ramesh &amp; Jaya</div>
                                        <div className="date">Thu, 21st Aug, 2015</div>
                                    </div>
                                </div>

                                <div className="item testimonial-block">
                                    <div className="couple-pic">
                                        <img src="/img/m5.jpeg" alt="" className="img-circle" />
                                    </div>
                                    <div className="feedback-caption">
                                        <p>Etiam ut metus nisi. Sed non laoreet nisi tinciin interdum risus felis enjoyable day were Notting was a problem from the build up to the dayvel eleifend milaoreet consectetur.</p>
                                    </div>
                                    <div className="couple-info">
                                        <div className="name">Rohan &amp; Monika</div>
                                        <div className="date">Thu, 12th Sept, 2015</div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}
