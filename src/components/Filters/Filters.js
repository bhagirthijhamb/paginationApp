import Filter from "./Filter";

const Filters = (props) => {
  return (
    <>
      <Filter placeholder="Search by name" stateVariable="name" />
      <Filter placeholder="Search by tag" stateVariable="tag" />
    </>
  );
};

export default Filters;
