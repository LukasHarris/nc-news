export default function ErrorsList({ errors }) {
  return (errors.length !== 0) 
    ? (<div className="error-message">
        <h3>Errors</h3>
        <ul>
          {errors.map( (error, index) => <li key={index}>{error.message}</li>)}
        </ul>
      </div>) 
    : null;
}