import "./Article.css";

const Article = ({ title, content }) => {
  return (
    <article className="blog__entry">
      <img src="https://via.placeholder.com/220" className="blog__img" alt="Imagen"></img>
      <div className="blog__description">
        <p>Post 1</p>
        <time>01 Jan, 2015</time>
      </div>
    </article>
  )
}
export { Article }
