import "./Article.css";

const Article = ({ title, date, image = 'https://via.placeholder.com/220', link}) => {
  return (
    <article className="blog__entry">
      <img src={image} className="blog__img" alt="Imagen"></img>
      <div className="blog__description">
        <p><a target="blank" href={link}>{title}</a></p>
        <time>{date}</time>
      </div>
    </article>
  )
}
export { Article }
