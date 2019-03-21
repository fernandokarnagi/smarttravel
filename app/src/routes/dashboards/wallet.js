/** @format */

import React, { Component, Fragment } from 'react';
import {
    Row,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardImgOverlay,
    CardText,
    Badge,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink as NavLinkRs,
    FormGroup,
    Label,
    CustomInput,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import IntlMessages from 'Util/IntlMessages';
import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadcrumbContainer from 'Components/BreadcrumbContainer';
import ThumbnailLetters from 'Components/ThumbnailLetters';
import ThumbnailImage from 'Components/ThumbnailImage';
var QRCode = require('qrcode.react');

export default class Wallet extends Component {
    constructor(props) {
        super(props);

        this.toggleFirstTab = this.toggleFirstTab.bind(this);
        this.toggleSecondTab = this.toggleSecondTab.bind(this);
        this.state = {
            activeFirstTab: '1',
            activeSecondTab: '1',
        };
    }

    toggleFirstTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeFirstTab: tab,
            });
        }
    }
    toggleSecondTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeSecondTab: tab,
            });
        }
    }
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h1>My Wallet</h1>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>

                <Row>
                    <Colxx xxs="12">
                        <Row className="icon-cards-row mb-2">
                            <Colxx xxs="12">
                                <Card className="mb-4">
                                    <CardBody className="text-center">
                                        <QRCode value="http://facebook.github.io/react/" />{' '}
                                    </CardBody>
                                </Card>
                            </Colxx>
                        </Row>

                        <Row className="icon-cards-row mb-2">
                            <Colxx xxs="6" sm="4" md="3" lg="3">
                                <Card className="mb-4">
                                    <CardBody className="text-center">
                                        <p className="card-text font-weight-semibold mb-0">Current balance (SGD)</p>
                                        <p className="lead text-center">25</p>
                                    </CardBody>
                                </Card>
                            </Colxx>

                            <Colxx xxs="6" sm="4" md="3" lg="3">
                                <Card className="mb-4">
                                    <CardBody className="text-center">
                                        <p className="card-text font-weight-semibold mb-0">Last transaction (SGD)</p>
                                        <p className="lead text-center">2.5</p>
                                    </CardBody>
                                </Card>
                            </Colxx>
                            <Colxx xxs="6" sm="4" md="3" lg="3">
                                <Card className="mb-4">
                                    <CardBody className="text-center">
                                        <p className="card-text font-weight-semibold mb-0">
                                            Total spending this month (SGD)
                                        </p>
                                        <p className="lead text-center">74</p>
                                    </CardBody>
                                </Card>
                            </Colxx>
                            <Colxx xxs="6" sm="4" md="3" lg="3">
                                <Card className="mb-4">
                                    <CardBody className="text-center">
                                        <p className="card-text font-weight-semibold mb-0">
                                            Total top-up this month (SGD)
                                        </p>
                                        <p className="lead text-center">80</p>
                                    </CardBody>
                                </Card>
                            </Colxx>
                        </Row>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}
