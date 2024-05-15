import React, { useState } from 'react';

// const [people, setPeople] = useState([
//     { id: 1, name: 'Иван', age: 20 },
//     { id: 2, name: 'Мария', age: 22 },
//     { id: 3, name: 'Алексей', age: 21 },
//     { id: 4, name: 'Марина', age: 19 },
//     { id: 5, name: 'Даша', age: 23 },
//     { id: 6, name: 'Глеб', age: 24 },
//     { id: 7, name: 'Дима', age: 18 },
//     { id: 8, name: 'Гриша', age: 20 },
//     { id: 9, name: 'Серафим', age: 21 }

//   ]);

function List() {
    const [people, setPeople] = useState([
        { id: 1, name: 'Иван', age: 20 },
        { id: 2, name: 'Мария', age: 22 },
        { id: 3, name: 'Алексей', age: 21 },
        { id: 4, name: 'Марина', age: 19 },
        { id: 5, name: 'Даша', age: 23 },
        { id: 6, name: 'Глеб', age: 24 },
        { id: 7, name: 'Дима', age: 18 },
        { id: 8, name: 'Гриша', age: 20 },
        { id: 9, name: 'Серафим', age: 21 }

      ]);


      const removeLastPerson = () => {
        setPeople(people.slice(0, -1));
      };
    return (
        <div style={{padding: '20px', margin: '0 auto'}}>
            <h1 style={{ marginLeft: '25px' }}>Guest list</h1>
            <button onClick={removeLastPerson} style={buttonStyle}>Delete</button>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        {person.name} {person.age}

                    </li>
                ))}
            </ul>
        </div>
    );
}
const buttonStyle = {
    marginLeft: '25px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
}

export default List;