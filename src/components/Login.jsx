import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

const Login = (props) => {
  // 로그인/회원가입 모달창
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [signupModal, setSignupModal] = React.useState(false);
  const openModal = () => {
    setSignupModal(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openSignupModal = () => {
    setModalIsOpen(false);
    setSignupModal(true);
  };
  const closeSignupModal = () => {
    setSignupModal(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>로그인</button>
      <Modal isOpen={modalIsOpen} close={closeModal} style={modalStyle}>
        <CloseButton
          src="https://image.flaticon.com/icons/png/512/458/458595.png"
          onClick={closeModal}
        />
        <Box1>
          <CharImg
            width="168px"
            src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
          />
          <WelcText>환영합니다!</WelcText>
        </Box1>
        <Box2>
          <text>이메일로 로그인</text>

          <LoginInput placeholder="이메일을 입력하세요" />
          <LoginInput placeholder="비밀번호를 입력하세요" type="password" />
          <LoginButton style={{ background: "#12b886" }}>로그인</LoginButton>
          <div>
            <text>
              아직 회원이 아니신가요?
              <TextButton onClick={openSignupModal}>회원가입</TextButton>
            </text>
          </div>
        </Box2>
      </Modal>

      <Modal isOpen={signupModal} close={closeSignupModal} style={modalStyle}>
        <CloseButton
          src="https://image.flaticon.com/icons/png/512/458/458595.png"
          onClick={closeSignupModal}
        />
        <Box1>
          <CharImg
            width="168px"
            src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
          />
          <WelcText>환영합니다!</WelcText>
        </Box1>
        <Box2>
          <text>이메일로 회원가입</text>

          <LoginInput placeholder="이메일을 입력하세요" />
          <LoginInput placeholder="닉네임을 입력하세요" />
          <LoginInput placeholder="비밀번호를 입력하세요" type="password" />
          <LoginInput placeholder="비밀번호를 입력하세요" type="password" />
          <LoginButton style={{ background: "#12b886" }}>회원가입</LoginButton>
          <div>
            <text>
              계정이 이미 있으신가요?
              <TextButton onClick={openModal}>로그인</TextButton>
            </text>
          </div>
        </Box2>
      </Modal>
    </React.Fragment>
  );
};

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(247, 247, 247, 0.8)",
    transition: "opacity 2000ms ease-in-out",
  },
  content: {
    width: "650px",
    height: "510px",
    margin: "auto",
    border: "none",
    boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
};

const CloseButton = styled.img`
  width: 11px;
  position: absolute;
  top: 30px;
  right: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Box1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  height: 550px;
  background-color: #f1f3f5;
  position: absolute;
  align-items: center;
  z-index: 0;
  
`;

const Box2 = styled.div`
  margin-top: 60px;
  margin-left: 250px;
  z-index: 10;
  
`;

const CharImg = styled.img`
  position: absolute;
  margin-left: 30px;
  margin-top: 180px;
`;

const WelcText = styled.text`
  position: absolute;
  margin-top: 300px;
  margin-left: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #495057;
`;

const LoginInput = styled.input`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: 16px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid #dcdddd;
  font-size: 16px;
`;

const LoginButton = styled.button`
  width: 340px;
  height: 48px;
  padding: auto;
  margin: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff
  background-color: #12b886
  
 
`;

const Text = styled.p``;

const TextButton = styled.span`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export default Login;
