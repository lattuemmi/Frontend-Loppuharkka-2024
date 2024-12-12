function ViewNotes(){
    return(
    <>
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
    </>
    )
}

export default ViewNotes;