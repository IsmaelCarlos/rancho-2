import './App.css'

function App() {

    return <>
        <nav id="sidebar" className="active">
            <ul className="list-unstyled components mb-5">
                <li className="active">
                    <a href="index.html"><span className="fa fa-home"></span> Início</a>
                </li>
                <li>
                    <a href="html/login.html"><span className="fa fa-user"></span> Conta</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-sticky-note"></span> Blog</a>
                </li>
                <li>./code
                    <a href="#"><span className="fa fa-cogs"></span> Services</a>
                </li>
                <li>
                    <a href="#"><span className="fa fa-paper-plane"></span> Contacts</a>
                </li>
            </ul>
        </nav>
        <div id="content" className="p-4 p-md-5">
            

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <img src="images/logotipo.png" className="logo_image" />
                    </div>

                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/about.html">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfólio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="html/contact.html">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h2 className="mb-4">

            </h2>

            <div className="container">
                <div className="section" id="carousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mr-auto ml-auto">
                                <div className="card card-raised card-carousel">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100"
                                                    src="https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg.jpg"
                                                    alt="First slide" />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h4>
                                                        <i className="material-icons">location_on</i>
                                                        Yellowstone National Park, United States
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100"
                                                    src="https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg2.jpg"
                                                    alt="Second slide" />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h4>
                                                        <i className="material-icons">location_on</i>
                                                        Somewhere Beyond, United States
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100"
                                                    src="https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg3.jpg"
                                                    alt="Third slide" />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h4>
                                                        <i className="material-icons">location_on</i>
                                                        Yellowstone National Park, United States
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <i className="material-icons">keyboard_arrow_left</i>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <i className="material-icons">keyboard_arrow_right</i>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
}

export default App
