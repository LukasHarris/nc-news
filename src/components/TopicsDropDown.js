export default function TopicsDropDown({ topics, setCurrentTopics }) {
 
  const changeHandler = function(event) {
    const value = event.target.value;
    setCurrentTopics(value);
  }

  return (
    <label>Topics
      <select name='topic_name' onChange={changeHandler}>
        <option defaultValue value="all">all</option>
        {topics.map( (topic, index) => <option key={index} value={topic}>{topic}</option>)}
      </select>
    </label>
  );
}