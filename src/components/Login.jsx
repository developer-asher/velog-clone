import React, { useRef } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

//elements
import Button from "../elements/Button";

const Login = (props) => {
  const dispatch = useDispatch();

  // 로그인/회원가입 모달창
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [signupModal, setSignupModal] = React.useState(false);
  //로그인 모달창 키면서 회원가입모달창 닫기(로그인 눌려서 로그인모달로이동)
  const openModal = () => {
    setSignupModal(false);
    setModalIsOpen(true);
  };
  //로그인 모달창 닫기(X표시 눌려서닫기)
  const closeModal = () => {
    setModalIsOpen(false);
  };
  //회원가입 모달창 키면서 로그인 모달창 닫기(회원가입 눌려서 회원가입모달로이동)
  const openSignupModal = () => {
    setModalIsOpen(false);
    setSignupModal(true);
  };
  //회원가입 모달창 닫기(X표시 눌려서닫기)
  const closeSignupModal = () => {
    setSignupModal(false);
  };
  // 로그인 모달창 인풋값 관리
  const [Email, setEmail] = React.useState("");
  const [Pw, setPw] = React.useState("");

  const user = { userEmail: Email, userPw: Pw }; //로그인 모달창 인풋값
  const login = () => {
    dispatch(userActions.loginDB(user));
  };
  //회원가입 모달창 인풋값 관리
  const [userEmail, setUserEmail] = React.useState("");
  const [userNickname, setUserNickname] = React.useState("");
  const [userPw, setUserPw] = React.useState("");
  const [userPwCheck, setUserPwCheck] = React.useState("");

  const userinfo = { userEmail, userNickname, userPw, userPwCheck }; //회원가입 모달창 인풋값
  const signup = () => {
    if (userPw !== userPwCheck) {
      window.alert("비밀번호가 같지 않습니다.");
    } else {
      dispatch(userActions.signupDB(userinfo));
      openModal();
    }
  };

  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    // 형식에 맞는 경우 true 리턴
    console.log("패스워드 유효성 검사 :: ", regExp.test(e.target.value));
    if (!regExp.test(e.target.value)) {
      window.alert("8 ~ 10자 영문, 숫자 조합");
    }
  };

  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    console.log("이메일 유효성 검사 :: ", regExp.test(e.target.value));
    if (!regExp.test(e.target.value)) {
      window.alert("이메일 형식에 맞지 않습니다.");
    }
  };

  return (
    <React.Fragment>
      <Button
        bd_radius="30px"
        bg_color="#343a3f"
        color="#ffffff"
        ft_size="17px"
        onClick={openModal}
      >
        로그인
      </Button>
      <Modal
        isOpen={modalIsOpen}
        close={closeModal}
        style={modalStyle}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
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
          <Text>이메일로 로그인</Text>

          <LoginInput
            placeholder="이메일을 입력하세요"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <LoginInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
          <LoginButton style={{ background: "#12b886" }} onClick={login}>
            로그인
          </LoginButton>
          <div>
            <Text>
              아직 회원이 아니신가요?
              <TextButton onClick={openSignupModal}>회원가입</TextButton>
            </Text>
          </div>
        </Box2>
      </Modal>

      <Modal
        isOpen={signupModal}
        close={closeSignupModal}
        style={modalStyle}
        ariaHideApp={false}
      >
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
          <Text>이메일로 회원가입</Text>

          <LoginInput
            placeholder="이메일을 입력하세요"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            onBlur={checkEmail}
          />
          <LoginInput
            placeholder="닉네임을 입력하세요"
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
          />
          <LoginInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
            onBlur={checkPassword}
          />
          <LoginInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            onChange={(e) => {
              setUserPwCheck(e.target.value);
            }}
          />
          <LoginButton style={{ background: "#12b886" }} onClick={signup}>
            회원가입
          </LoginButton>
          <div>
            <Text>
              계정이 이미 있으신가요?
              <TextButton onClick={openModal}>로그인</TextButton>
            </Text>
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
    ariaHideApp: "false",
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
  color: #fff;
  background-color: #12b886;
  &:hover {
    cursor: pointer;
  }
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
