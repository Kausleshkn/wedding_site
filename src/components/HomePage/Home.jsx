import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

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

    const settings2 = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    };

    const settings3 = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    };

    const items = [

        {
            image: "/img/bannershadi1.jpg"
        },

        {
            image: "/img/shadi2banner.jpg"
        },

        {
            image: "/img/shadibanner3.jpg"
        }
    ];

    return (
        <>
            <div className="slider-bg">
                <Slider id="slider" className="owl-carousel owl-theme slider"
                    {...settings}>
                    {items.length > 0 && items.map((slide, index) => (
                        <div key={index} className="item">
                            <img src={slide.image} alt="Wedding couple just married" style={{ width: "100%" }} />
                        </div>
                    ))}
                </Slider>
                <div className="find-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 finder-block">
                                <div className="finder-caption">
                                    <h1>Find your perfect Wedding Partner</h1>
                                    {/* <p>Over <strong>1200+ Wedding Vendor </strong>for you special date &amp; Find the perfect venue &amp; save you date.</p> */}
                                </div>
                                <div className="finderform">
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                                <select className="form-control">
                                                    <option>I am Looking for </option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
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
                                            <div className="form-group col-md-4">
                                                <button type="submit" style={{padding:"10px 75px"}}>Search</button>
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

            <div className="section-space80 bg-light">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Your Wedding Story Start Here</h1>
                                <p>Various versions of PerfectSangam have evolved over the years, each intentionally crafted to
                                    bring together hearts in perfect harmony.</p>
                            </div>
                        </div>
                    </div>

                    <Slider  {...settings2} className="row">

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl1.jpeg" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Saumya</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Teacher</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl2.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>


                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Radhika</a></h2>
                                            <p className="location">Age:26</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Manager</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/men12.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Harshit</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession: Banker</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/men7.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Aman</a></h2>
                                            <p className="location">Age:25</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Writer</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl1.jpeg" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Saumya</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Teacher</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl1.jpeg" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Saumya</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Teacher</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl2.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Radhika</a></h2>
                                            <p className="location">Age:26</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/men12.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Harshit</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession: Banker</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/men7.avif" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Aman</a></h2>
                                            <p className="location">Age:25</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Writer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                        {/* <div className="swiper-slide">
                            <div className="">
                                <div className="vendor-box">
                                    <div className="vendor-image">
                                        <a href="#">
                                            <img src="/img/girl1.jpeg" alt="wedding vendor" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="vendor-detail">
                                        <div className="caption">
                                            <h2><a href="#" className="title"> Name : Saumya</a></h2>
                                            <p className="location">Age:29</p>
                                            <p className="location">Maritial Status:Single</p>
                                            <p className="location">Profession:Teacher</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </Slider>
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            <a href="#" className="btn btn-default btn-lg">View All Profiles</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Real Weddings */}

            <div className="section-space80">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Recent Profiles</h1>
                                <p>Find Your Forever: Where Stories Begin - Perfect Sagam, Your Ultimate Matrimony Site</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#">
                                        <img src="/img/men13.avif" alt="" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Aditya </a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i
                                        className="icon-wedding-day icon-size-18"></i> 5 june,1996</span> <span
                                            className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i>
                                            Surat, India</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#">
                                        <img src="/img/girl4.avif" alt="" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Ananya</a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i
                                        className="icon-wedding-day icon-size-18"></i> 8 july,1999</span> <span
                                            className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i>
                                            Kanpur, India</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#">
                                        <img src="/img/men9.avif" alt="" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Sumit </a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i
                                        className="icon-wedding-day icon-size-18"></i> 15 june,1998</span> <span
                                            className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i>
                                            Delhi, India</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="real-wedding-block mb30">
                                <div className="real-wedding-img">
                                    <a href="#">
                                        <img src="/img/girl5.avif" alt="" className="img-responsive" />
                                    </a>
                                </div>
                                <div className="real-wedding-info well-box text-center">
                                    <h2 className="real-wedding-title"><a href="#" className="title">Shilpa</a></h2>
                                    <p className="real-wed-meta"><span className="wed-day-meta"><i
                                        className="icon-wedding-day icon-size-18"></i> 15 March,1996</span> <span
                                            className="wed-location-meta"> <i className="icon-wedding-location icon-size-18"></i>
                                            Lucknow, India</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"><a href="#" className="btn btn-default btn-lg">View More Profiles</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Be inspired by Recent Couples */}


            <div className="section-space80 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title mb60 text-center">
                                <h1>Be inspired by Recent Couples</h1>
                                <p>Discovering harmony in life perfect moments at Perfectsangam</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="vendor-total-list mb30">

                                <div className="vendor-total-thumb">

                                    <a href="#">
                                        <img src="/img/m1.jpeg" className="img-responsive" alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="vendor-total-list mb30">

                                <div className="vendor-total-thumb">

                                    <a href="#">
                                        <img src="/img/m2.jpeg" className="img-responsive" alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="vendor-total-list mb30">

                                <div className="vendor-total-thumb">

                                    <a href="#">
                                        <img src="/img/m3.jpeg" className="img-responsive" alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="vendor-total-list mb30">

                                <div className="vendor-total-thumb">

                                    <a href="#">
                                        <img src="/img/m5.jpeg" className="img-responsive" alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center"><a href="#" className="btn btn-default btn-lg">View more
                            Inspiration</a></div>
                    </div>
                </div>
            </div>

            {/* image caption section */}

            <section className="module parallax parallax-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 mx-auto parallax-caption">
                            <h2>Find your perfect Match now</h2>
                            <p>Welcome to PerfectSangam, where we believe that every soul has its perfect match waiting to be discovered. At PerfectSangam, we specialize in creating meaningful connections that last a lifetime. Our unique approach combines advanced compatibility algorithms with personalized matchmaking, ensuring that you find someone who truly complements you in every way. Whether you are seeking companionship, romance, or a lifelong partner, PerfectSangam is dedicated to helping you navigate the journey of finding love with ease and confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* why choose us */}

            <div className="section-space80 bg-light">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title mb60 text-center">
                    <h1>Most Reason to Why Choose us</h1>
                    <p>Choose PerfectSangam for expert matchmaking and personalized service, ensuring meaningful connections and lasting relationships.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="well-box feature-block text-center">
                    <div className="feature-icon"><i className="icon-heart-4 icon-size-60 icon-light"></i></div>
                    <div className="feature-info">
                        <h3>20 Years Experiance</h3>
                        <p>We are never short of suggestions or inspiring ideas.We will support you and advise you.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="well-box feature-block text-center">
                    <div className="feature-icon"><i className="icon-newly-married-couple icon-size-60 icon-light"></i></div>
                    <div className="feature-info">
                        <h3>100 real weddings</h3>
                        <p>Every wedding is unique and has a special story. Share all the details of your special moments.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="well-box feature-block text-center">
                    <div className="feature-icon"><i className="icon-curtains icon-size-60 icon-light"></i></div>
                    <div className="feature-info">
                        <h4>1500+ Potential Matches</h4>
                        <p>Await the chance to find your perfect life partner on our matrimonial site, PerfectSangam, today!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Testimonial Section */}

<div className="section-space80 bg-light">
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
</div>

        </>
    )
}
