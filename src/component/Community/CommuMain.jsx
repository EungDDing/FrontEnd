
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

const CommuMain = () => {
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
                    <h1>커뮤니티</h1>
                </div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                }}></div>
                <div>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>4</span>
                        <span>제 귀여운 도마뱀 좀 보세요</span><span style={{
                            float: "right",
                        }}>goodman</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>3</span>
                        <span>새로 입양한 친구입니당</span><span style={{
                            float: "right",
                        }}>Rapture</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>2</span>
                        <span>못 참고 질렀습니다</span><span style={{
                            float: "right",
                        }}>richman</span></ListGroup.Item>
                        <ListGroup.Item><span style={{
                            margin: "1%",
                        }}>1</span>
                        <span>제 귀여운 도마뱀 좀 보세요</span><span style={{
                            float: "right",
                        }}>goodman</span></ListGroup.Item>
                    </ListGroup>
                </div>

            </div>
        </div>
    )
}

export default CommuMain;
