import "../css/articles.css"
import artcilesData from "../js/articles.js"

function Articles() {
    return (
        <div className="articles-container">
            <h1 className="articles-header">WIP</h1>
            <div className="articles-grid">
                {artcilesData.map((article) => (
                    <a href={article.link} className="article-card" key={article.id}>
                        <img src={article.src} alt={article.name} className="article-icon"/>
                        <h2 className="article-name">{article.name}</h2>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Articles;

