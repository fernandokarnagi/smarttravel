/** @format */

import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import { Colxx, Separator } from 'Components/CustomBootstrap';
import BreadcrumbContainer from 'Components/BreadcrumbContainer';
import IntlMessages from 'Util/IntlMessages';
import {
    Row,
    Card,
    CardBody,
    Input,
    CardTitle,
    FormGroup,
    Label,
    CustomInput,
    Button,
    FormText,
    Form,
    CardSubtitle,
} from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from 'Components/CustomSelectInput';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TagsInput from 'react-tagsinput';

import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import 'react-fine-uploader/gallery/gallery.css';

const selectData = [
    { label: 'Chocolate', value: 'chocolate', key: 0 },
    { label: 'Vanilla', value: 'vanilla', key: 1 },
    { label: 'Strawberry', value: 'strawberry', key: 2 },
    { label: 'Caramel', value: 'caramel', key: 3 },
    { label: 'Cookies and Cream', value: 'cookiescream', key: 4 },
    { label: 'Peppermint', value: 'peppermint', key: 5 },
];

class HomeDefault extends Component {
    constructor(props) {
        super(props);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleTagChangeLabelOver = this.handleTagChangeLabelOver.bind(this);
        this.handleChangeDateLabelOver = this.handleChangeDateLabelOver.bind(this);
        this.handleTagChangeLabelTop = this.handleTagChangeLabelTop.bind(this);
        this.handleChangeLabelTop = this.handleChangeLabelTop.bind(this);
        this.handleChangeDateLabelTop = this.handleChangeDateLabelTop.bind(this);

        this.state = {
            selectedOption: '',
            selectedOptionLabelOver: '',
            selectedOptionLabelTop: '',
            startDate: null,
            startDateLabelOver: null,
            startDateLabelTop: null,
            startDateTime: null,
            startDateRange: null,
            endDateRange: null,
            embeddedDate: moment(),
            tags: [],
            tagsLabelOver: [],
            tagsLabelTop: [],
        };
    }

    handleTagChange(tags) {
        this.setState({ tags });
    }

    handleTagChangeLabelOver(tagsLabelOver) {
        this.setState({ tagsLabelOver });
    }

    handleTagChangeLabelTop(tagsLabelTop) {
        this.setState({ tagsLabelTop });
    }

    handleChangeLabelOver = selectedOptionLabelOver => {
        this.setState({ selectedOptionLabelOver });
    };

    handleChangeLabelTop = selectedOptionLabelTop => {
        this.setState({ selectedOptionLabelTop });
    };

    handleChangeDateLabelOver(date) {
        this.setState({
            startDateLabelOver: date,
        });
    }
    handleChangeDateLabelTop(date) {
        this.setState({
            startDateLabelTop: date,
        });
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h1>Where do you want to go?</h1>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>

                <Row className="mb-4">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <Form>
                                    <Row className="mb-4">
                                        <Colxx xxs="12">
                                            <Label for="to">Find places</Label>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="from"
                                                    id="from"
                                                    placeholder="Address, building name, postal code"
                                                />
                                            </FormGroup>
                                        </Colxx>
                                    </Row>
                                    <Button
                                        onClick={e => this.props.history.push(`/app/dashboards/places`)}
                                        color="primary">
                                        Search
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}
export default injectIntl(HomeDefault);
