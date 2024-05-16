import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProjectsSection() {
  return (
    <div class="container">
            <Row>
                <Col className="md-12">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><span><i className="fa fa-globe"></i></span></div>
                                <div className="content">
                                    <span className="year">2014 - 2015</span>
                                    <h4 className="title">Web Desginer</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><span><i className="fa fa-rocket"></i></span></div>
                                <div className="content">
                                    <span className="year">2015 - 2016</span>
                                    <h4 className="title">Web Developer</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><span><i className="fa fa-briefcase"></i></span></div>
                                <div className="content">
                                    <span className="year">2016 - 2017</span>
                                    <h4 className="title">Web Desginer</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="timeline-content">
                                <div className="circle"><span><i className="fa fa-mobile"></i></span></div>
                                <div className="content">
                                    <span className="year">2017 - 2018</span>
                                    <h4 className="title">Web Developer</h4>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non lectus justo. Nam ultricies laoreet massa sed maximus. Curabitur tristique sagittis scelerisque. Vivamus posuere nisi quis tortor interdum, in finibus risus convallis. Suspendisse efficitur lacus a nulla commodo, sit amet vestibulum nibh.
                                    </p>
                                    <div className="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
  );
}
