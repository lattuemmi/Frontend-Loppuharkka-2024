import { useState } from 'react';
import CourseItem from './CourseItem.jsx';

function App() {
  let courses = [
    {
      id: 0,
      name: 'versionhallinta',
    },
    {
      id: 1,
      name: 'java',
    },
    {
      id: 2,
      name: 'ruotsi',
    },
    {
      id: 3,
      name: 'ohjelmointi 1',
    },
  ];

  return (
    <>
      <div>
        <button>Create notes for class</button>
        <button>List notes</button>
        <button>Add Courses</button>
      </div>

      <ul>
        {courses.map((kurssi, i) => {
          return <CourseItem key={kurssi.id} id={kurssi.id} name={kurssi.name} />;
        })}
      </ul>

      <div>
        <pre>{JSON.stringify(courses, null, 2)}</pre>
      </div>

      <div>
        <p>Päivittyykö tää?</p>
      </div>
    </>
  );
}

export default App;
