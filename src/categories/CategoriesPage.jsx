/**
 * The React component representing the categories page
 * @param categories - List of categories from the App component
 * @returns How the categories page should be rendered
 */
const CategoriesPage = ({ categories }) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {/*
        Loop through all the categories and display each one
        The key property must be unique for each list item (li) as it helps React render things efficiently
      */}
      {categories.map((category) => (<li key={category.id}>{category.title}</li>))}
    </ul>
  </div>
)

// Allows other files to use the above CategoriesPage component
export default CategoriesPage;
