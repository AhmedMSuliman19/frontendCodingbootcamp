import React, { useContext } from 'react';
import AppContext from './AppContext';
import './App.css';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const LandingPage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div>

<body id="page-top">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <img class="pubgicon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMVF7o5QG5TPEymSWSdJiCKdkbzh_YOQD8eg&usqp=CAU" />
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Pubgiers</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Explore</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold"> A <img class ="pubgfan" src = "data:image/png;base64,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" style={{width: '80px', height: '80px'}}/> fan? You're in the right place!</h1>
                        <hr class="divider my-4" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 font-weight-light mb-5">A platform where all PUBG Mobile players around the world come together</p>
                        <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="page-section bg-primary" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">What we do?</h2>
                        <hr class="divider light my-4" />
                        <p class="text-white-50 mb-4">We give all PUBG Mobile fans and players the chance to unite, share tactics, best kills, recommendations, and thoughts. Recommendations and thoughts include everything about the game; modes, maps, guns, vehicles, and everything! </p>
                        <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">What you can do</h2>
                <hr class="divider my-4" />
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <img src = "https://s1.econotimes.com/assets/uploads/20191206a0fd1e2b5f75445c5_th_1024x0.jpg" style={{width:'150px', height:'120px'}}/>
                            <br/><br/>  
                            <h3 class="h4 mb-2">Share and view recommendations</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg" style={{width:'150px', height:'120px'}} />
                            <br/><br/>
                            <h3 class="h4 mb-2">Share your <br/> best kills</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="https://cdn.telanganatoday.com/wp-content/uploads/2019/03/PUBG-640x400-640x400.jpg" style={{width:'150px', height:'120px'}} />
                            <br/><br/>
                            <h3 class="h4 mb-2">Share and view <br/> tactics</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="https://www.levelwinner.com/wp-content/uploads/2018/04/pubg-mobile-sc10-800x419.jpg" style={{width:'150px', height:'120px'}} />
                            <br/><br/>
                            <h3 class="h4 mb-2">Share thoughts about equipment, weapons, vehicls and all</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-6 col-sm-6">
                        <a class="portfolio-box" href="https://s1.econotimes.com/assets/uploads/20191206a0fd1e2b5f75445c5_th_1024x0.jpg"
                            ><img class="img-fluid" src= "https://s1.econotimes.com/assets/uploads/20191206a0fd1e2b5f75445c5_th_1024x0.jpg" style={{width:'760px', height:'320px', opacity: '0.7'}}/>
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Share and View Recommendations</div>
                            </div></a>
                        
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <a class="portfolio-box" href="https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg"
                            ><img class="img-fluid" src="https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg" style={{width:'760px', height:'320px', opacity: '0.7'}} alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Share Kills</div>
                            </div></a>
                        
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-lg-6 col-sm-6">
                        <a class="portfolio-box" href="https://cdn.telanganatoday.com/wp-content/uploads/2019/03/PUBG-640x400-640x400.jpg"
                            ><img class="img-fluid" src="https://cdn.telanganatoday.com/wp-content/uploads/2019/03/PUBG-640x400-640x400.jpg" style={{width:'760px', height:'320px', opacity: '0.7'}} alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Share Tactics</div>
                            </div></a>
                        
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <a class="portfolio-box" href="https://www.levelwinner.com/wp-content/uploads/2018/04/pubg-mobile-sc10-800x419.jpg"
                            ><img class="img-fluid" src="https://www.levelwinner.com/wp-content/uploads/2018/04/pubg-mobile-sc10-800x419.jpg" style={{width:'760px', height:'320px', opacity: '0.7'}} alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Share Thoughts</div>
                            </div></a>
                        
                    </div>
                </div>
            </div>
        </div>
        <section class="page-section bg-dark text-white">
            <div class="container text-center">
                <h2 class="mb-4">Sign up and become a pubgier!</h2>
                <a class="btn btn-light btn-xl" href="/">Sign Up</a>
                <br/><br/>
                <p>Already have an account? <a href="/">Sign In</a> </p>
            </div>
        </section>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">Share you thoughts and ideas with us and help us improve and grow the platform!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+971(88)8888888</div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="mailto:pubgfans@pubgiers.com">pubgfans@pubgiers.com</a>
                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">Copyright © 2020 - Ahmed Suliman</div></div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        
        <script src="js/scripts.js"></script>
    </body>
    </div>
  );
}


export default LandingPage;