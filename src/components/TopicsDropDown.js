export default function TopicsDropDown({ topics, setCurrentTopic }) {
 
  const changeHandler = function(event) {
    const value = event.target.value;
    setCurrentTopic(value);
  }

  return (
    <label>Topic
      <select name='topic_name' onChange={changeHandler}>
        <option defaultValue value="">all</option>
        {topics.map( (topic, index) => <option key={index} value={topic}>{topic}</option>)}
      </select>
    </label>
  );
}