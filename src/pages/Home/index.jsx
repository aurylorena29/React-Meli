import { useState, useEffect } from "react"
import Layout from "../Layout"
import Card from "../../components/Card"

function Home() {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=:query')
      .then(response => response.json())
      .then(data => {
        setItems(data.results || []); 
      })
      .catch(error => console.error('Error fetching data:', error)); 
  }, []);

  return (
    <>
      <Layout>
        {
          items?.map((item) => (
            <Card
              key={item.id}
              image={item.thumbnail}
              price={item.price}
              description={item.title}
              condition={item.condition}
            />
          ))
        }
      </Layout>
    </>
  );
}

export default Home;
