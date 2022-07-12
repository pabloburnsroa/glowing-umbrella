const asyncFunction = async () => {
  try {
    const todosResponse = await fetch(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    const todos = await todosResponse.json();
    return todos;
  } catch (error) {
    console.log(error, 'errorrrrr');
  }
};
