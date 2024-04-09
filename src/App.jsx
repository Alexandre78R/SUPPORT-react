import useState from "react";
import "./App.css";
import Category from "./components/Categories/Categories";

function App() {

  //State à changer pour savoir si on a bien récupérer les données de l'api
  const [loading, setLoading] = useState(false);

  // State du tableau de données des catégories
  const [categories, setCategories] = useState([]);

  // State du tableau de données des articles
  const [articles, setArticles] = useState(null);

  const handleClick = () => {
    // Obtenez les données via l'API en utilisant les liens suivants : http://localhost:3000
    fetch("http://localhost:3000/categories")
    .then(data => setCategories(data))
    .catch(err => console.log(err))

    fetch("/articles")
    .then(response => response.json())
    .then(data => setArticles([]))
    .catch(err => console.log(err))


    setLoading(true)
  }

  return (
    <>
      <button onClick={handleClick}>{loading ? "Mettre à jour les catégories" : "Voir les catégories"}</button>
      {
          categories.map((category, index) => {
            return (
              <Categories
                key={index}
                category={category}
                articles={articles.filter(
                  (article) => category.name === article.category
                )}
              />
            );
          })
      }
    </>
  );
}

export default App;