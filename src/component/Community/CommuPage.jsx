
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

import CommuPost from './CommuPost';
import CommuComment from "./CommuComment";

function CommuPage(props) {
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
                <CommuPost 
                title="제 귀여운 도마뱀 좀 보세요"
                id="goodman"
                img="https://m.더쥬.com/web/product/big/202208/e378ae085daf5857bd4ef03184557626.jpg" 
                content="얼마전에 새로 데리고 온 친구 입니다 귀엽게 생겼죠..^^"
                />
                
                <div style={{
                    width: "80%",
                    margin: "0 auto",
                }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <CommuComment 
                            number="1"
                            comment="정말 귀엽네요"
                            id="richman" />
                            </ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="2"
                            comment="어디서 데려오셨나용"
                            id="veryvery" />
                            </ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="3"
                            comment="헉 우리집 귀염둥이랑 똑같이 생겼네요"
                            id="도마뱀조아" /></ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="4"
                            comment="굿이에요"
                            id="그저굿" /></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    )

}

export default CommuPage;