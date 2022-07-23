function solution(queries) {
  const generator = new Generator();
  const results = [];
  queries.forEach((query) => {
    const [action, name] = query.split(' ');
    if (action === 'create') {
      results.push(generator.create(name));
      console.log(results);
    } else if (action === 'delete') {
      generator.delete(name);
    }
  });
  return results;
}

class Generator {
  result = [];
  constructor() {}
  // init create method
  create(name) {
    const count = 0;
    if (this.result.includes(name)) {
      this.result.push(`${name}${count++}`);
    }
  }
  // crate the delete method
  delete() {}
}

const h = [
  'create alex',
  'create alex',
  'delete alex1',
  'create alex',
  'create john',
];

solution(h);
