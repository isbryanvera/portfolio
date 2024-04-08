import "./Contact.css";
import getPosts from "../../services/api";
import { Article } from "../../components/Article/Article";
import { Package } from "../../components/Package/Package";
import { useState, useEffect } from "react";

function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      getPosts().then((data) => {
        setData(data);
        localStorage.setItem('cachedData', JSON.stringify(data));
      })  
    }
  }, []);

  if (!data) {
    return <p className="loader">Loading...</p>;
  }

  function printData(dataToPrint) {
    if (dataToPrint.length === 0) {
      return <p className="">No hay post disponibles</p>;
    }
    return dataToPrint.map((post, index) => {
      return <Article key={index} {...post} />;
    });
  }

  return (
    <section className="more">
      <article className="section__more-info">
        <p className="">The last articles</p>
        <section className="blog-posts">
          {printData(data)}
        </section>
      </article>
      <article className="section__more-info">
        <p>Packages Libraries and tools</p>
        <section className="packages-list">
          <Package />
          <Package />
        </section>
      </article>
    </section>
  );
}

export { Contact };
