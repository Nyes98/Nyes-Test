import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { slice } from "@/redux/store/reducer/user";

const Home = () => {
  const Test = useSelector((state: RootState) => state.user.email);
  const dispatch = useDispatch();

  const test = () => {
    dispatch(slice.actions.login("changed"));
  };

  return <Title onClick={test}>{Test}</Title>;
};

export default Home;

const Title = styled.h1`
  color: #2f5fd1;
  margin-left: 300px;
`;
