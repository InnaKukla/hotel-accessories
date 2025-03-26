import { ClipLoader } from "react-spinners";

import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ClipLoader color="#3f5954" loading={true} size={50} />
    </Container>
  );
};

export default Loader;
