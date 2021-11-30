import React, { Component } from 'react';
import {
    Card,
    Button,
    Col, Row,
    Container,
    Pagination,
    Form
} from 'react-bootstrap';
import './index.css'


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    render() {
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
                                                <Form.Control type="reactants" placeholder="Chất tham gia phản ứng" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={1}>
                                            <div className='arrow-style'>⟶</div>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3" controlId="products">
                                                {/* <Form.Label>Password</Form.Label> */}
                                                <Form.Control type="products" placeholder="Chất sản phẩm" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={2}>
                                            <Button variant="primary" type="submit" className='btn-search-style'>
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
                                <text className='txt-result-style'>Kết quả:</text> tìm thấy
                                <text className='txt-number-result-style'> 1</text> phương trình với chất tham gia là:
                                <text className='reactants-name-style'> H<sub>2</sub>SO<sub>4</sub></text>
                            </div>

                            <div class="box all">NaOH + <text className='color-reactants-name-style'>H<sub>2</sub>SO<sub>4</sub></text> ⟶
                                Na<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O
                            </div>

                            <div className='knowledge-more-form-style'>
                                <text className='txt-result-style'>Kiến thức bổ sung:</text>
                                <div class="box-knowledge-more-style effect1">
                                    <text className='txt-knowledge-more-style'>
                                        3 nhóm phản ứng nhiệt phân muối Nitrat
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