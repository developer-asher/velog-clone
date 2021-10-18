import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <React.Fragment>
      <CommentWrap>
        {/* 프로필 관련  */}
        <CmtWrapDiv>
            <CmtUserInfoDiv>
            <CmtProfile />
            <CmtUserInfo>
                <UserNickName>user nickname</UserNickName>
                <CmtInsertDT>3일전</CmtInsertDT>
            </CmtUserInfo> 
            </CmtUserInfoDiv>
        </CmtWrapDiv>{/* 프로필 관련 끝 */}
        {/* 댓글관련 */}
        <CmtWrapTextDiv>
            여기에 댓글내용이 들어갑니다. 여기에 댓글내용이 들어갑니다.
            여기에 댓글내용이 들어갑니다. 여기에 댓글내용이 들어갑니다.
            여기에 댓글내용이 들어갑니다. 여기에 댓글내용이 들어갑니다.
            여기에 댓글내용이 들어갑니다. 여기에 댓글내용이 들어갑니다.
        </CmtWrapTextDiv>{/* 댓글관련 끝 */}
      </CommentWrap>  
    </React.Fragment>
  );
};

const CommentWrap = styled.div`
    margin: 20px;
    border-top: 1px solid #E9ECEF; 
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-sizing: inherit;
    display: block;
`;

const CmtWrapDiv = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

const CmtUserInfoDiv = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: inherit;
    color: rgb(52, 58, 64);
`;

const CmtProfile = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    display: block;
    border-radius: 50%;
    background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=");
    object-fit: cover;
    background-size: cover;
    color: #fff;
    padding: 16px;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
    border: none;
    align-items: center;
    justify-content: center;
`;

const CmtUserInfo = styled.div`
    margin-left: 1rem;
    line-height: 1;
`;

const UserNickName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: rgb(52, 58, 64);
    margin: 0px;
`;

const CmtInsertDT = styled.p`
    margin-top: 0.5rem;
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
    box-sizing: inherit;
    display: block;
    line-height: 1;
`;

const CmtWrapTextDiv = styled.p`
    font-size: 1.125rem;
    color: rgb(34, 36, 38);
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
    box-sizing: inherit;
    display: block;
`;

export default Comment;
