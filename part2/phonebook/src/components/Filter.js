const Filter = ({ newSearch, handleNewSearch }) => {
  return (
    <div>
      filter shown with{' '}
      <input
        value={newSearch}
        onChange={handleNewSearch}
        placeholder='Search for a name'
      />
    </div>
  );
};

export default Filter;
