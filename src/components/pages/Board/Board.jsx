import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardById } from "../../../api/axios";
import { Container, Heading, ListCard } from "../../UI";

const BoardPage = () => {
  const [info, setInfo] = useState();
  const { boardId } = useParams();

  useEffect(() => {
    if (boardId) {
      getBoardById(boardId).then((res) => {
        setInfo(res);
      });
    }
  }, [boardId]);

  if (!info) {
    return <Heading>Loading...</Heading>;
  }

  return (
    <Container size="fluid">
      <Heading className="is-text-centered">{info.title}</Heading>
      {info.lists.map((list) => (
        <ListCard title={list.title} cards={list.cards} />
      ))}
    </Container>
  );
};

export default BoardPage;
