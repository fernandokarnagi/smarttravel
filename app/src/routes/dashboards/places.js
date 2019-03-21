/** @format */

import React, { Component, Fragment } from 'react';
import IntlMessages from 'Util/IntlMessages';
import { Row, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadcrumbContainer from 'Components/BreadcrumbContainer';
import Pagination from 'Components/List/Pagination';

import places from 'Data/places.json';

export default class SearchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: places.data,
            currentPage: 1,
            totalPage: 12,
            keyword: 'City Hall',
        };
    }

    onChangePage(page) {
        this.setState({
            currentPage: page,
        });
    }

    render() {
        const rowLength = this.state.items.length;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h1>Places: City Hall</h1>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="12" className="mb-4">
                        <Card>
                            <CardBody>
                                {this.state.items.map((item, i) => {
                                    return (
                                        <div key={i} className={`${rowLength !== i + 1 ? 'mb-3' : ''}`}>
                                            <NavLink to={`./placedetails`} className="w-40 w-sm-100">
                                                <p className="list-item-heading mb-1 color-theme-1">{item.name}</p>
                                                <p className="mb-1 text-muted text-small">Category | {item.category}</p>
                                                <p className="mb-1 text-muted  text-small">
                                                    {item.availableTransports} available transports
                                                </p>
                                                <p className="mb-1 text-muted  text-small">
                                                    {item.shortestTime} fastest route
                                                </p>
                                                <p className="mb-2 text-muted text-small">
                                                    {item.cheapest} cheapest cost
                                                </p>
                                                <p className="mb-4 text-small">{item.description}</p>
                                            </NavLink>
                                            {rowLength !== i + 1 && <Separator />}
                                        </div>
                                    );
                                })}
                            </CardBody>
                        </Card>
                    </Colxx>
                    {/* <Pagination
                        currentPage={this.state.currentPage}
                        totalPage={this.state.totalPage}
                        onChangePage={i => this.onChangePage(i)}
                    /> */}
                </Row>
            </Fragment>
        );
    }
}
