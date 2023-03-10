import React from 'react';
import './testimonial.scss';
import TOne from '../../assets/images/t1.png';
import RIcon from '../../assets/icons/star.png';
import Avatar from '../../assets/images/avatar.png';

function Testimonial(props) {
    return (
        <>
            <section id="testimonial-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h1>testimonials.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row g-0">
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className="content-area">
                                                    <h3>Einfach fantastisch</h3>
                                                    <div className="review d-flex align-items-center mt-4">
                                                        <img src={RIcon} className="img-fluid" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                    </div>
                                                    <p className="mt-3">
                                                        ???Wir bei SPH Media waren auf der Suche nach einem neuen,
                                                        zeitgem????en Webauftritt, als wir auf Design Valley stie??en.
                                                        Das
                                                        Team hat uns von Anfang bis Ende hervorragend unterst??tzt
                                                        und
                                                        die Umsetzung unserer W??nsche war absolut professionell. Der
                                                        neue Webauftritt wird von unseren Kunden und
                                                        Gesch??ftspartnern
                                                        gleicherma??en begeistert aufgenommen und tr??gt ma??geblich zu
                                                        unserem erfolgreichen Auftritt bei. Wir sind begeistert und
                                                        k??nnen Design Valley uneingeschr??nkt
                                                        weiterempfehlen.<br/><br/> Der
                                                        gesamte Prozess war eine positive Erfahrung und das
                                                        endg??ltige
                                                        Ergebnis war erstklassig. Vielen Dank an das Team von
                                                        DesignValley f??r ihre gro??artige Arbeit!???
                                                    </p>

                                                    <div className="avatar d-flex align-items-center pt-3">
                                                        <img src={Avatar} className="img-fluid" alt="Avatar"/>
                                                        <div className="name">
                                                            <h4>Christopher Hoffmann</h4>
                                                            <span>Gesch??ftsf??hrer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-10 col-lg-6">
                                                <img src={TOne} className="d-block w-100" alt="TOne"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row g-0">
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className="content-area">
                                                    <h3>Einfach fantastisch</h3>
                                                    <div className="review d-flex align-items-center mt-4">
                                                        <img src={RIcon} className="img-fluid" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                    </div>
                                                    <p className="mt-3">
                                                        ???Wir bei SPH Media waren auf der Suche nach einem neuen,
                                                        zeitgem????en Webauftritt, als wir auf Design Valley stie??en.
                                                        Das
                                                        Team hat uns von Anfang bis Ende hervorragend unterst??tzt
                                                        und
                                                        die Umsetzung unserer W??nsche war absolut professionell. Der
                                                        neue Webauftritt wird von unseren Kunden und
                                                        Gesch??ftspartnern
                                                        gleicherma??en begeistert aufgenommen und tr??gt ma??geblich zu
                                                        unserem erfolgreichen Auftritt bei. Wir sind begeistert und
                                                        k??nnen Design Valley uneingeschr??nkt
                                                        weiterempfehlen.<br/><br/> Der
                                                        gesamte Prozess war eine positive Erfahrung und das
                                                        endg??ltige
                                                        Ergebnis war erstklassig. Vielen Dank an das Team von
                                                        DesignValley f??r ihre gro??artige Arbeit!???
                                                    </p>

                                                    <div className="avatar d-flex align-items-center pt-3">
                                                        <img src={Avatar} className="img-fluid" alt="Avatar"/>
                                                        <div className="name">
                                                            <h4>Christopher Hoffmann</h4>
                                                            <span>Gesch??ftsf??hrer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-10 col-lg-6">
                                                <img src={TOne} className="d-block w-100" alt="TOne"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row g-0">
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className="content-area">
                                                    <h3>Einfach fantastisch</h3>
                                                    <div className="review d-flex align-items-center mt-4">
                                                        <img src={RIcon} className="img-fluid" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                        <img src={RIcon} className="img-fluid ms-2" alt="RIcon"/>
                                                    </div>
                                                    <p className="mt-3">
                                                        ???Wir bei SPH Media waren auf der Suche nach einem neuen,
                                                        zeitgem????en Webauftritt, als wir auf Design Valley stie??en.
                                                        Das
                                                        Team hat uns von Anfang bis Ende hervorragend unterst??tzt
                                                        und
                                                        die Umsetzung unserer W??nsche war absolut professionell. Der
                                                        neue Webauftritt wird von unseren Kunden und
                                                        Gesch??ftspartnern
                                                        gleicherma??en begeistert aufgenommen und tr??gt ma??geblich zu
                                                        unserem erfolgreichen Auftritt bei. Wir sind begeistert und
                                                        k??nnen Design Valley uneingeschr??nkt
                                                        weiterempfehlen.<br/><br/> Der
                                                        gesamte Prozess war eine positive Erfahrung und das
                                                        endg??ltige
                                                        Ergebnis war erstklassig. Vielen Dank an das Team von
                                                        DesignValley f??r ihre gro??artige Arbeit!???
                                                    </p>

                                                    <div className="avatar d-flex align-items-center pt-3">
                                                        <img src={Avatar} className="img-fluid" alt="Avatar"/>
                                                        <div className="name">
                                                            <h4>Christopher Hoffmann</h4>
                                                            <span>Gesch??ftsf??hrer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-7 col-lg-6">
                                                <img src={TOne} className="d-block w-100" alt="TOne"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;