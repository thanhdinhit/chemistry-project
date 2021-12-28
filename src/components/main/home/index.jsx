import React, { Component } from 'react';
import {
    Card,
    Button,
    Col, Row,
    Container,
    Pagination,
    Form
} from 'react-bootstrap';
import './index.css';
import { data } from '../../../data/mock/chathoahoc';

const tokenize = (formula) => formula
    .split(/(\d+)/)
    .map((token, idx) =>
        idx % 2
            ? <sub key={idx}>{token}</sub>
            : token
    )

const Formula = ({ children }) => (
    <code className='result-font-style'>{tokenize(children)}</code>
)
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            type: '',
            reactants: '',
            products: '',
            dataResult: [],
            reactantsArr4Show: [],
            productsArr4Show: [],
            isSearch: false,
            knowledge: [],
        }
    }

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    handleClick = () => {
    }

    handleChange = (event, type) => {
        const { value } = event.target
        switch (type) {
            case 'reactants':
                this.setState({
                    type: type,
                    reactants: value,
                })
                break;
            case 'products':
                this.setState({
                    type: type,
                    products: value,
                })
                break;
            default:
                break;
        }
    }

    tokenizes = (formula) => formula
        .split(/(\d+)/)
        .map((token, idx) =>
            idx % 2
                ? <sub key={idx}>{token}</sub>
                : token
        )

    // Formula = ({ children }) => (
    //     <code>{this.tokenize(children)}</code>
    // )
    Formula = (children) => {
        let getData = children.chemical_equation;
        let newData = getData.split('=');
        let reactants = [];
        let products = [];

        reactants = newData[0].split('+');
        products = newData[1].split('+');

        return (
            <div className="box all result-font-style">
                {reactants && reactants.map((item, idx) => (
                    <span>{!isNaN(parseInt(item.substring(0, 1)))
                        ? <span>{item.charAt(0)}<Formula>{item.substring(1)}</Formula></span>
                        : <Formula>{item}</Formula>}
                        <span>{reactants.length - 1 === idx
                            ? null
                            : '  +  '}</span>
                    </span>
                ))}
                <span> ⟶ </span>
                {products && products.map((item, idx) => (
                    <span>{!isNaN(parseInt(item.substring(0, 1)))
                        ? <span>{item.charAt(0)}<Formula>{item.substring(1)}</Formula></span>
                        : <Formula>{item}</Formula>}
                        <span>{products.length - 1 === idx
                            ? null
                            : '  +  '}</span>
                    </span>
                ))}
                {/* <code>{this.tokenizes('Ag2NO3')} ⟶ 2{this.tokenizes('Ag2NO3')} + {this.tokenizes('Ag2NO3')}</code> */}
            </div>
        )
        // return (
        //     <code>{this.tokenizes(children)} ⟶ 2{this.tokenizes(children)} + {this.tokenizes(children)}</code>
        // )
    }

    checkExist = (dataInput, valueToCheck) => {
        let convertData = dataInput.toString().toLowerCase(); // returns 
        let isExist = 0;
        // convert to "AAA, BBB,CCC"" => aaa,bbb,ccc"
        if (convertData.indexOf(valueToCheck.toLowerCase()) > -1) {
            isExist = 1;
        } else {
            isExist = 0;
        }
        return isExist;
    }

    handleNewData = (data, itemNeedSearch, type) => {

        let newArr = [];

        if (type == 'reactants') {
            for (let i = 0; i < data.length; i++) {
                if ((this.checkExist(data[i].reactants, itemNeedSearch)) === 1) {
                    newArr.push(data[i]);
                }
            }
        }

        if (type == 'products') {
            for (let i = 0; i < data.length; i++) {
                if ((this.checkExist(data[i].products, itemNeedSearch)) === 1) {
                    newArr.push(data[i]);
                }
            }
        }
        return newArr;
    }

    handleSearch = () => {
        const { type, reactants, products } = this.state;
        let nameArr;
        let dataInput = data;
        let dataOutput;
        let typeInput;
        let knowledge = [];

        let reactantsArr, productsArr;
        let reactantsData = data;
        let productsData = data;

        if (products.trim() == "" || reactants.trim() == "") {
            if (products.trim() != "") {
                nameArr = this.splitData(products);
                typeInput = 'products';
            }
            if (reactants.trim() != "") {
                nameArr = this.splitData(reactants);
                typeInput = 'reactants';
            }

            if (products.trim() != "" || reactants.trim() != "") {
                for (let i = 0; i < nameArr.length; i++) {
                    dataInput = this.handleNewData(dataInput, nameArr[i], typeInput);
                }
            }

            if (products.trim() == "" && reactants.trim() == "") {
                dataInput = [];
            }
            dataOutput = dataInput;
        }

        if (products.trim() != "" && reactants.trim() != "") {
            reactantsArr = this.splitData(reactants);
            for (let i = 0; i < reactantsArr.length; i++) {
                reactantsData = this.handleNewData(reactantsData, reactantsArr[i], 'reactants');
            }

            productsArr = this.splitData(products);
            for (let j = 0; j < productsArr.length; j++) {
                productsData = this.handleNewData(productsData, productsArr[j], 'products');
            }

            // if you want to be more clever to find those in common:
            let result = reactantsData.filter(o1 => productsData.some(o2 => o1.id === o2.id));
            dataOutput = result;
        }

        dataOutput && dataOutput.map((item, idx) => {
            knowledge.push(item.knowledge);
        })

        this.setState({
            dataResult: dataOutput,
            isSearch: true,
            reactantsArr4Show: reactants.trim() != "" ? this.splitData(reactants) : [],
            productsArr4Show: products.trim() != "" ? this.splitData(products) : [],
            knowledge,
        })
    }

    splitData = (data) => {
        let newData = data.split(/[ ,]+/);
        return newData;
    }

    render() {
        const {
            dataResult,
            isSearch,
            reactantsArr4Show,
            productsArr4Show,
            knowledge,
        } = this.state;
        console.log(knowledge);

        return (
            <div>
                <div>
                    <Container>
                        {/* <div className='signin-signup-style'>
                            text
                        </div> */}
                    </Container>
                    <div className='search-box-equation-style'>
                        <Container>
                            <h5 className='title-style'>NGÂN HÀNG PHƯƠNG TRÌNH HÓA HỌC</h5>
                            <div>
                                <Form>
                                    <Row>
                                        <Col md={1}>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3" controlId="reactants">
                                                {/* <Form.Label>Email address</Form.Label> */}
                                                <Form.Control
                                                    type="reactants"
                                                    placeholder="Chất tham gia phản ứng"
                                                    onChange={e => this.handleChange(e, 'reactants')}
                                                    onClick={() => this.handleClick()}
                                                />
                                                <div className="tooltip-style">
                                                    Nhập các chất tham gia phản ứng cách nhau bởi dấu cách
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={1}>
                                            <div className='arrow-style'>⟶</div>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3" controlId="products">
                                                {/* <Form.Label>Password</Form.Label> */}
                                                <Form.Control
                                                    type="products"
                                                    placeholder="Chất sản phẩm"
                                                    onChange={e => this.handleChange(e, 'products')}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="primary" className='btn-search-style' onClick={() => this.handleSearch()}>
                                                <text className='txt-btn-search-style'>Search</text>
                                            </Button>
                                        </Col>
                                        {/* <Col md={1}>
                                        </Col> */}
                                    </Row>
                                </Form>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div className='result-form-style'>
                                <text className='txt-result-style'>Kết quả: </text>
                                {isSearch && (productsArr4Show.length > 0 || reactantsArr4Show.length > 0)
                                    ? <text>
                                        tìm thấy
                                        <text className='txt-number-result-style'> {dataResult.length}</text> phương trình với
                                        {reactantsArr4Show.length
                                            ? <span>
                                                <text> chất tham gia là: </text>
                                                <text className='reactants-name-style'>
                                                    <span> {reactantsArr4Show && reactantsArr4Show.map((item, idx) => (
                                                        <span><Formula>{item}</Formula><span> </span></span>
                                                    ))}</span>
                                                </text>
                                            </span>
                                            : null}
                                        {productsArr4Show.length && reactantsArr4Show.length ? '&' : null}
                                        {productsArr4Show.length
                                            ? <span>
                                                <text> chất sản phẩm là: </text>
                                                <text className='reactants-name-style'>
                                                    <span> {productsArr4Show && productsArr4Show.map((item, idx) => (
                                                        <span><Formula>{item}</Formula><span> </span></span>
                                                    ))}</span>
                                                </text>
                                            </span>
                                            : null}
                                    </text>
                                    : <span className='txt-notifi-style'>Vui lòng nhập chất tham gia hay chất sản phẩm để thực hiện tìm kiếm</span>
                                }
                            </div>

                            {/* <div class="box all">NaOH + <text className='color-reactants-name-style'>H<sub>2</sub>SO<sub>4</sub></text> ⟶
                                Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O
                            </div> */}
                            {/* <p>Ethanol is <Formula>Na2SO4</Formula></p> */}
                            <p>{dataResult && dataResult.map((item, idx) => this.Formula(item))}</p>
                            {/* <p>{this.Formula('Fe2(SO4)3')}</p> */}

                            <div className='knowledge-more-form-style'>
                                <text className='txt-result-style'>Kiến thức bổ sung:</text>
                                <div class="box-knowledge-more-style effect1">
                                    <text className='txt-knowledge-more-style'>
                                        {knowledge && knowledge.map((item, idx) => (
                                            <li>{item}</li>
                                        ))}
                                    </text>
                                    <p className='txt-knowledge-more-style'>
                                        Kiến thức về hóa học cơ bản và nâng cao cho mọi người
                                    </p>
                                </div>
                            </div>

                            <div className="verticals six">
                                <section className="pinned-note">
                                    <div className="nodes" >
                                        <div className="left-strip">
                                            <h1 className="pinned-heading">Về chúng tôi: </h1>
                                            <p className="pinned-description"><strong>Ngân hàng phương trình hóa học </strong>
                                                là sản phẩm tâm huyết được xây dựng bởi Dược sỹ <span className='name-owner-style'>Nguyễn Thị Ánh Tuyết</span> và
                                                Dược sỹ <span className='name-owner-style'>Nguyễn Hoàng Tiến</span> (ĐH Y Dược TP Hồ Chí Minh).
                                                <p>Trong quá trình dạy và ôn thi cho nhiều em học sinh, anh chị nhận thấy rằng phương trình hóa học
                                                    vẫn luôn là một trong nhưng khó khăn cho các bạn. Do đó, chúng tôi đã xây dựng kho dữ liệu với 99%
                                                    các phương trình hóa học trong và ngoài sách giáo khoa với dộ chính xác 100% giúp các bạn viết và hiểu
                                                    chương trình trong khoảng thời gian ngắn. Giúp các bạn học tập hiệu quả hơn. Cảm ơn và chúc các bạn học tốt!</p>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;