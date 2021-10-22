import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "../redux/modules/content";

//components
import UserList from "../components/UserList";
import UserInfo from "../components/UserInfo";

const UserPage = (props) => {
  const dispatch = useDispatch();
  const mylist = useSelector((state) => state.content.mycontent?.posts);
  const userId = props.match.params.userNickname;

  useEffect(() => {
    if (mylist !== null) {
      dispatch(contentActions.getMyContentDB(userId));
    }
  }, []);
  return (
    <React.Fragment>
      <UserInfo id={userId} />
      {mylist?.map((l, i) => {
        return <UserList key={i} {...l} id={userId} />;
      })}
    </React.Fragment>
  );
};

export default UserPage;
