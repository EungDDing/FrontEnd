import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React from "react";

import QnAQuestion from "./QnAQuestion";
import QnAAnswer from "./QnAAnswer";

const QnAPage = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RIQ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#info">정보</Nav.Link>
                            <Nav.Link href="#trade">거래</Nav.Link>
                            <Nav.Link href="#commu">커뮤니티</Nav.Link>
                            <Nav.Link href="#QnA">QnA</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#signin">로그인</Nav.Link>
                            <Nav.Link href="#signup">회원가입</Nav.Link>
                            <Nav.Link href="#mypage">마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <QnAQuestion 
                title="새로 입양을 했는데요..."
                id="goodman"
                img="https://m.petinzooshop.com/web/product/big/202112/57746595f426e36d47214ca678369e61.jpg" 
                content="이 친구가 얼마 정도로 자랄까요??? 이 친구에 맞는 집을 좀 사려는데요.."
                />

                <QnAAnswer
                id="더파충류샵"
                answer="종류를 보아하니 볼파이튼인데요. 파충류는 보통 ..."
                />
            </div>
        </div>
    )

}

export default QnAPage;

