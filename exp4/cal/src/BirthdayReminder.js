import React, { useState } from "react";

function BirthdayReminder() {
    const [birthdays, setBirthdays] = useState([
        { id: 1, name: "John Doe", date: "2025-04-10" },
        { id: 2, name: "Jane Smith", date: "2025-06-15" }
    ]);

    const [newName, setNewName] = useState("");
    const [newDate, setNewDate] = useState("");

    function addBirthday() {
        if (newName && newDate) {
            setBirthdays([...birthdays, { id: Date.now(), name: newName, date: newDate }]);
            setNewName("");
            setNewDate("");
        }
    }

    function removeBirthday(id) {
        setBirthdays(birthdays.filter(b => b.id !== id));
    }

    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
            <h2>Birthday Reminder</h2>

            <div>
                <input 
                    type="text" placeholder="Enter Name" value={newName} 
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input 
                    type="date" value={newDate} 
                    onChange={(e) => setNewDate(e.target.value)}
                />
                <button onClick={addBirthday}>Add</button>
            </div>

            <h3>Upcoming Birthdays</h3>
            {birthdays.length === 0 ? <p>No Birthdays</p> : (
                <ul>
                    {birthdays.map((b) => (
                        <li key={b.id}>
                            {b.name} - {b.date}
                            <button onClick={() => removeBirthday(b.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BirthdayReminder;
