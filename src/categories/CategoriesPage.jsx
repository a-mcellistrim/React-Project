/**
 * The React component representing the categories page
 * @param categories - List of categories from the App component
 * @returns How the categories page should be rendered
 */
const CategoriesPage = ({ categories }) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {/* Loop through all the categories and display each one */}
      {categories.map((category) => (<li key={`${category.id}-${category.title}`}>{category.title}</li>))}
    </ul>
  </div>
)

// Allows other files to use the above CategoriesPage component
export default CategoriesPage;
