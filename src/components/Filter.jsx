
const Filter = ({
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) => {
  return (
    <div className="flex flex-col justify-center align-middle md:flex-row md:space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        className="mb-4 md:mb-0 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => setFilterRating(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Filter;
