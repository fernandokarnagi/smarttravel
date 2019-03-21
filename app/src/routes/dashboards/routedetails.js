/** @format */

import React, { Component, Fragment } from 'react';
import IntlMessages from 'Util/IntlMessages';
import {
    Row,
    Card,
    CardBody,
    Nav,
    NavItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    TabContent,
    TabPane,
    Badge,
    CardSubtitle,
    CardTitle,
} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Rating from 'Components/Rating';
import { SmallLineChart } from 'Components/Charts';
import { smallChartData1, smallChartData2, smallChartData3, smallChartData4 } from 'Constants/chartConfig';

import { LineShadow } from 'Components/Charts';
import { areaChartConfig } from 'Constants/chartConfig';

import { NavLink } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

import { Colxx } from 'Components/CustomBootstrap';
import { BreadcrumbItems } from 'Components/BreadcrumbContainer';

import classnames from 'classnames';

export default class PlaceDetails extends Component {
    constructor(props) {
        super(props);

        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeFirstTab: '1',
        };
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeFirstTab: tab,
            });
        }
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h1>City Hall Mall</h1>
                        <div className="float-sm-right mb-2">
                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    color="primary"
                                    size="lg"
                                    outline
                                    className="top-right-button top-right-button-single">
                                    <IntlMessages id="layouts.actions" />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Find a taxi</DropdownItem>
                                    <DropdownItem>Find nearest bus stop</DropdownItem>
                                    <DropdownItem>Find nearest shared bike</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>I just want to walk</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>

                        <Row>
                            <Colxx xxs="12" lg="6" className="mb-4">
                                <Card className="mb-4">
                                    {/* <div className="position-absolute card-top-buttons">
                                                <Button outline color={'white'} className="icon-button">
                                                    <i className="simple-icon-pencil" />
                                                </Button>
                                            </div> */}
                                    <img src="/assets/img/cityhall.jpg" alt="Detail" className="card-img-top" />

                                    <CardBody>
                                        <p className="text-muted text-small mb-2">
                                            <IntlMessages id="layouts.description" />
                                        </p>
                                        <p className="mb-3">
                                            Raffles City Shopping Centre is the retail component of the I.M.
                                            Pei-designed Raffles City Complex, which sits atop City Hall MRT Station.
                                            The Shopping Centre caters to Singapore's upmarket office population, with
                                            fashion and specialty shops like Swatch, Dockers, and Esprit. The
                                            Metropolitan Museum of Art Store calls Raffles City its home away from home
                                            (home being New York), and the basement offers a multiplicity of dining
                                            choices.
                                        </p>

                                        <p className="text-muted text-small mb-2">
                                            <IntlMessages id="layouts.rating" />
                                        </p>
                                        <div className="mb-3">
                                            <Rating total={5} rating={5} interactive={false} />
                                        </div>

                                        <p className="text-muted text-small mb-2">Cheapest travel cost</p>
                                        <p className="mb-3">$1.5 by SMRT Bus</p>
                                        <p className="text-muted text-small mb-2">Tagging</p>
                                        <div className="mb-3">
                                            <p className="d-sm-inline-block mb-1">
                                                <Badge color="outline-secondary mb-1 mr-1" pill>
                                                    mall
                                                </Badge>
                                                <Badge color="outline-secondary mb-1 mr-1" pill>
                                                    city
                                                </Badge>
                                                <Badge color="outline-secondary mb-1 mr-1" pill>
                                                    hall
                                                </Badge>
                                                <Badge color="outline-secondary mb-1 mr-1" pill>
                                                    singapore
                                                </Badge>
                                            </p>
                                        </div>

                                        <p className="text-muted text-small mb-2">In my favourite?</p>
                                        <p>No</p>
                                        <Button color="primary" className="mb-2">
                                            Add to favourite
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Colxx>

                            <Colxx xxs="12" lg="6">
                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="11:00 AM"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                        <h3 className="vertical-timeline-element-title">Bishan Bus Interchange</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Bishan</h4>
                                        <p>Take SMRT Bus 167 (SGD 0.5)</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="11:15 AM"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                        <h3 className="vertical-timeline-element-title">Toa Payoh Bus Stop 152</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Toa Payoh</h4>
                                        <p>Change to SMRT Bus 25 (SGD 0.5)</p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="11:45 AM"
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                                        <h3 className="vertical-timeline-element-title">Orchard Bus Interchange</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Orchard</h4>
                                        <p>Take bus SMRT 61 (SGD 0.5)</p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </Colxx>
                        </Row>
                    </Colxx>
                </Row>
                <Row />
            </Fragment>
        );
    }
}
