import { useEffect, useState } from "react";
import { getBoards } from "../../../api/axios";
import { BoardCardList, Heading, Container } from "../../UI";

const HomePage = () => {
  const [boards, setBoards] = useState(null);

  useEffect(() => {
    getBoards()
      .then((res) => {
        setBoards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container size="fluid">
      <Heading className="is-text-centered">My Boards</Heading>
      <Container size="lg">
        {!!boards ? <BoardCardList boards={boards} /> : <p>Loading...</p>}
      </Container>
    </Container>
  );
};

export default HomePage;
