import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardById } from "../../../api/axios";
import { Container, Heading } from "../../UI";

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
      <Heading>{info.title}</Heading>
      {info.cards.map((card) => (
        <div>{card.content}</div>
      ))}
    </Container>
  );
};

export default BoardPage;
