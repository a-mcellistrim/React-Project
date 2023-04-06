const CategoryList = ({ categories }) => (
  <div>
    <h3>Categories</h3>
    <ul>
      {categories.map((category) => (<li key={`${category.id}-${category.title}`}>{category.title}</li>))}
    </ul>
  </div>
)

export default CategoryList;
