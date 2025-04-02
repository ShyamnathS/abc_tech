import React, { useState } from "react";

const Voting = () => {
    const candidates = ["Alice", "Bob", "Charlie"];
    const [votes, setVotes] = useState(Array(candidates.length).fill(0));

    const voteForCandidate = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>Voting Application</h2>
            {candidates.map((candidate, index) => (
                <div key={index} style={{ margin: "10px" }}>
                    <button onClick={() => voteForCandidate(index)}>
                        Vote for {candidate}
                    </button>
                    <p>Votes: {votes[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default Voting;
