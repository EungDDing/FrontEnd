import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

function CommuMain(props) {
    return (
        <div>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <div style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                }}>
                    <h1>QnA</h1>
                </div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                }}></div>
                <div>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>4</span>
                        <span>좋은 거래처가 어디일까요??</span><span style={{
                            float: "right",
                        }}>goodman</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>3</span>
                        <span>이떤 도구가 잘 어울릴까요</span><span style={{
                            float: "right",
                        }}>Rapture</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>2</span>
                        <span>이 친구 종이 무엇일까요</span><span style={{
                            float: "right",
                        }}>richman</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>1</span>
                        <span>새로 입양을 했는데요...</span><span style={{
                            float: "right",
                        }}>goodman</span></ListGroup.Item>
                    </ListGroup>
                </div>

            </div>
        </div>
    )
}

export default CommuMain;