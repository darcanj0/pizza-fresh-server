interface User {
  name: string;
  age: number;
  occupation: string;
  role?: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
  occupation?: string;
}

export type Person = Admin | User;

// export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
    occupation: 'Pedreiro',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    occupation: 'Pedreiro',
    role: 'World saver',
  },
];

export function logPerson(person: Person) {
  let additionalInfo: string | undefined;
  if (person.role) {
    additionalInfo = person.role;
  } else {
    additionalInfo = person.occupation;
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInfo}`);
}

console.log('Persons:');
persons.forEach(logPerson);
