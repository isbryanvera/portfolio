import "./Contact.css";
import getPosts from "../../services/api";
import { Article } from "../../components/Article/Article";
import { Package } from "../../components/Package/Package";
import { useState, useEffect, useMemo } from "react";

function Contact() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const posts = await getPosts();
      setData(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem('cachedData', JSON.stringify(data));
    }
  }, [data]);

  const cachedData = useMemo(() => data, [data]);

  if (!cachedData) {
    return <p className="loader">Loading...</p>;
  }

  return (
    <section className="more">
      <article className="section__more-info">
        <p className="">The last articles</p>
        <section className="blog-posts">
          {cachedData?.map((post, index) => {
            return <Article key={index} {...post} />;
          })}
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
