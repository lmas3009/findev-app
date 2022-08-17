const Search = ({SearchData}) => {
  return (
    <div className="w-full flex items-center justify-center pt-5 pb-2">
      <div className="w-[70%]">
        <input
          type="text"
          className="w-full h-full p-3 bg-white rounded"
          placeholder="🔍 Search for developers or tags"
          onChange={(e) => SearchData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
