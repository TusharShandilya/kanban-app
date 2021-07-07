import { useEffect, useState } from "react";
import { getBoards } from "../../../api/axios";
import { BoardCard, Heading, Container } from "../../UI";

const HomePage = () => {
  const [boards, setBoards] = useState([]);

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
        {boards.length ? (
          boards.map((board) => (
            <BoardCard title={board.title} slug={board.slug} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </Container>
  );
};

export default HomePage;
