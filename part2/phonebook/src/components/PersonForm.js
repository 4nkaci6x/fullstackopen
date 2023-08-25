const PersonForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name:{' '}
        <input
          value={props.newName}
          onChange={props.handleNewNameChange}
          name='name'
          placeholder='Type a new name'
        />
      </div>
      <div>
        number:{' '}
        <input
          value={props.newNumber}
          onChange={props.handleNewNumberChange}
          placeholder='Type a new number'
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
