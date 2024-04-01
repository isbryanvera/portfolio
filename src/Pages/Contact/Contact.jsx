import "./Contact.css";
import { Article } from "../../components/Article/Article";
import { Package } from "../../components/Package/Package";

function Contact() {
  return (
    <section className="more">
      <article className="section__more-info">
        <p className="">The last articles</p>
        <section className="blog-posts">
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </section>
      </article>
      <article className="section__more-info">
        <p>Packages Libraries and tools</p>
        <section className="packages-list">
          <Package/>
          <Package />
        </section>
      </article>
    </section>
  )
}

export { Contact }
