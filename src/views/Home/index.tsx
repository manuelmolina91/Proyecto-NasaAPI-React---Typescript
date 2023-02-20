import { FC, useCallback, useEffect, useState } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";
import { getMars, Mars } from "../../services/api/mars"
import { App, Container } from "./styles";

const Home: FC = () => {
  const [marsList, setMarsList] = useState<Mars[]>([]);
  const [apodData, setApodData] = useState<any[]>([]); // inicializar la variable apodData como array vacío

  const getMarsList = useCallback(async () => {
    const mars = await getMars();
    setMarsList(mars);
  }, [])

  useEffect(() => {
    console.log('entramos')
    getMarsList();
  }, [getMarsList]);

  const onRemove = useCallback((id: number) => {

    setApodData((prev) => prev.filter((mars) => mars.id !== id))

}, [])

  return (
    <App>
      <Navbar
      />
      <Container>
      {marsList.map((mars, index) => (
        <Card
          key={index}
          nasaId={mars.nasaId} 
          sol={mars.sol}
          image={mars.image}
          onRemove={onRemove}
        />
      ))}
      </Container>
    </App>
  );
};

export default Home;