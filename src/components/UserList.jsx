import React from "react";
import styled from "styled-components";

const UserList = () => {
  
    return (
        <React.Fragment>
            <Wrap>
                <Side>
                <UserInfoWrap>
                    <UserInfoDiv>
                        <UserProfile></UserProfile>
                        <UserTextDiv>
                            <UserNickName>파프리크아앙</UserNickName>
                            <UserBlogDiscription>자면 안된드아아앙</UserBlogDiscription>
                        </UserTextDiv>
                    </UserInfoDiv>
                    <DivLine></DivLine>
                </UserInfoWrap>
                <UserListWrap>
                    <FirstPostWrap>
                        <a href="#">
                        <PostImagePreview />
                        </a>
                        <a href="#" style={{textDecoration: "none"}}><PostTitle>제목: 리액트는 개힘들드아아앙</PostTitle></a>
                        <PostTextPreview>
                            여기서 컨텐츠 내용 중 Text의 상단 (일부분)이 보입니다. 폰트색상도 약간 연하구여, 글씨가 많아지면 알아서 잘려서 보입니다.
                            글의 상단만 보일 수 있게 해주져!! 짱이져? 
                            여기서 컨텐츠 내용 중 Text의 상단 (일부분)이 보입니다. 폰트색상도 약간 연하구여, 글씨가 많아지면 알아서 잘려서 보입니다.
                            글의 상단만 보일 수 있게 해주져!! 짱이져?
                            여기서 컨텐츠 내용 중 Text의 상단 (일부분)이 보입니다. 폰트색상도 약간 연하구여, 글씨가 많아지면 알아서 잘려서 보입니다.
                            글의 상단만 보일 수 있게 해주져!! 짱이져?
                            여기서 컨텐츠 내용 중 Text의 상단 (일부분)이 보입니다. 폰트색상도 약간 연하구여, 글씨가 많아지면 알아서 잘려서 보입니다.
                            글의 상단만 보일 수 있게 해주져!! 짱이져?
                        </PostTextPreview>
                        <PostHashtagWrap>
                            <a href="#" style={{textDecoration: "none"}}><PostTag>Project</PostTag></a>
                            <a href="#" style={{textDecoration: "none"}}><PostTag>Fighting!</PostTag></a>
                            <a href="#" style={{textDecoration: "none"}}><PostTag>clone</PostTag></a>
                            <a href="#" style={{textDecoration: "none"}}><PostTag>database</PostTag></a>
                        </PostHashtagWrap>
                        <CommentInfoWrap>
                            <span>6일 전</span><CommentPointfont> · </CommentPointfont><span>0개의 댓글</span> 
                        </CommentInfoWrap>
                    </FirstPostWrap>
                </UserListWrap>
                </Side>
            </Wrap>
        </React.Fragment>
    );
}

const Wrap = styled.div`
padding-bottom: 4rem;
box-sizing: inherit;
display: block;
`;

const Side = styled.div`
width: 768px;
margin-left: auto;
margin-right: auto;
box-sizing: inherit;
display: block;
`;

const UserInfoWrap = styled.div`
margin-top: 5.625rem;
padding-left: 1rem;
padding-right: 1rem;
box-sizing: inherit;
display: block;
`;

const UserInfoDiv = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
box-sizing: inherit;
`;

const UserProfile = styled.div`
background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=");
background-size: cover;
display: block;
width: 8rem;
height: 8rem;
border-radius: 50%;
object-fit: cover;
box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
box-sizing: inherit;
color: -webkit-link;
cursor: pointer;
`;

const UserTextDiv = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
margin-left: 1rem;
box-sizing: inherit;
`;

const UserNickName = styled.p`
font-size: 1.5rem;
line-height: 1.5;
font-weight: bold;
color: rgb(33, 37, 41);
box-sizing: inherit;
display: block;
`;

const UserBlogDiscription = styled.p`
white-space: pre-wrap;
font-size: 1.125rem;
line-height: 1.5;
margin-top: 0.25rem;
color: rgb(73, 80, 87);
letter-spacing: -0.004em;
box-sizing: inherit;
display: block;
`;

const DivLine = styled.div`
background: rgb(233, 236, 239);
width: 100%;
height: 1px;
margin-top: 2rem;
margin-bottom: 1.5rem;
box-sizing: inherit;
display: block;
`;

const UserListWrap = styled.div`
box-sizing: inherit;
display: block;
`;

const FirstPostWrap = styled.div`
padding-top: 0px;
padding-bottom: 4rem;
line-height: 1.5;
box-sizing: inherit;
display: block;
`;

const PostImagePreview = styled.div`
padding-top: 52.356%;
margin-bottom: 1rem;
width: 100%;
position: relative;
box-sizing: inherit;
display: block;
background: url("https://zonerantivirus.com/wp-content/uploads/default-image.png");
background-size: cover;
`;

const PostTitle = styled.p`
font-size: 1.5rem;
margin: 0px;
color: rgb(33, 37, 41);
word-break: keep-all;
box-sizing: inherit;
display: block;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
`;

const PostTextPreview = styled.div`
margin-bottom: 2rem;
margin-top: 0.5rem;
font-size: 1rem;
color: rgb(73, 80, 87);
word-break: keep-all;
overflow-wrap: break-word;
box-sizing: inherit;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
line-height: 1.5;
max-height: 4.4em;
overflow: hidden;
`;

const PostHashtagWrap = styled.div`
margin-bottom: -0.875rem;
box-sizing: inherit;
display: block;
line-height: 1.5;
`;

const PostTag = styled.div`
margin-bottom: 0.875rem;
background: rgb(241, 243, 245);
padding-left: 1rem;
padding-right: 1rem;
height: 2rem;
border-radius: 1rem;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
margin-right: 0.875rem;
color: rgb(12, 166, 120);
text-decoration: none;
font-weight: 500;
font-size: 1rem;
box-sizing: inherit;
line-height: 1.5;
`;

const CommentInfoWrap = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
margin-top: 1rem;
color: rgb(134, 142, 150);
font-size: 0.875rem;
box-sizing: inherit;
line-height: 1.5;
`;

const CommentPointfont = styled.span`
margin-left: 0.5rem;
margin-right: 0.5rem;
box-sizing: inherit;
display: block;
`;


export default UserList;