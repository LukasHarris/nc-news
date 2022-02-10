export default function SortByDropDown({ setCurrentSortBy }) {

  const changeHandler = function(event) {
    const value = event.target.value;
    setCurrentSortBy(value);
  }

  return (
    <label>Sort&nbsp;By
      <select onChange={changeHandler}>
        <option defaultValue value="created_at">Date Created</option>
        <option value="comment_count">Comment Counts</option>
        <option value="votes">Votes</option>
      </select>
    </label>
  );
}