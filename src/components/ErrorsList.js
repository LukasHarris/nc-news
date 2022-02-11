export default function ErrorsList({ errors }) {
  return (errors.length !== 0) 
    ? (<div className="errors">
        <h3>Errors</h3>
        <ul>
          {errors.map( (error, index) => <li key={index}>{error.message}</li>)}
        </ul>
      </div>) 
    : null;
}