import React from "react";
import styled from "styled-components";

const UserInfo = () => {
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
        </Side>
      </Wrap>
    </React.Fragment>
  );
};

export default UserInfo;

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



