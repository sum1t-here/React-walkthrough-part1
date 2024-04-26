export default function Person({ name, age }) {
  return (
    <>
      <p>Person Details</p>
      <p>
        Name: {name}, age: {age}
      </p>
    </>
  );
}

// use case

<Person name='Sumit' age='30' />;
