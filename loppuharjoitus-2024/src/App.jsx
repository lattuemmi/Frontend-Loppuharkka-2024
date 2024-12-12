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
        <p>Add notes sivu</p>
      </div>

      {/*Tästä alkaa Add notes for course view sivu */}
      <div>
        <p>Add new notes for course</p>
      </div>
      
      <p>Course:</p>

      <div>
        <select name="kurssi" id="">
          <option value="kurssi1">Versionhallinta</option>
          <option value="kurssi2">Java</option>
          <option value="kurssi3">Ruotsi</option>
          <option value="kurssi4">Ohjelmointi1</option>
        </select>
      </div>
      
      <div>
        <textarea name="" id=""></textarea>
      </div>

      <div>
        <button>Save</button>
        <button>Back</button>
      </div>

      <div className="muistiinpano laatikko">Tän pitäis sit olla tallennettu muistiinpano</div>
      <div className="muistiinpano laatikko">Tän pitäis sit olla tallennettu muistiinpano</div>
      
      {/* Tästä alkaa list view - all notes ( pystyy myös suodattamaan kurssin mukaan  )*/}
    
      <p>Course:</p>

      <div>
        <select name="kurssi" id="">
          <option value="kurssi1">Versionhallinta</option>
          <option value="kurssi2">Java</option>
          <option value="kurssi3">Ruotsi</option>
          <option value="kurssi4">Ohjelmointi1</option>
        </select>
      </div>

      <div className="muistiinpano laatikko">Tän pitäis sit olla tallennettu muistiinpano</div>
      <div className="muistiinpano laatikko">Tän pitäis sit olla tallennettu muistiinpano</div>
      <div className="muistiinpano laatikko">Tän pitäis sit olla tallennettu muistiinpano</div>
    
      {/* Tästä alkaa Add courses sivu */}

      <div>
        <input type="text" />
        <button>Add course</button>

        <p>Lisäämisen jälkeen laitetaan joku varmistus siitä että kurssi on saatu lisättyä
        </p>
      </div>
    </>
  );
}

export default App;
