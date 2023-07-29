import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { data } = useCategories();
  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
