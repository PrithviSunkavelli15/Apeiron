import React from "react";
import "./Board.css";
import boardImage from "./Team.png";
import member1 from "./member1.jpg";
import member3 from "./member3.jpg";
import member4 from "./member4.jpg";
import member5 from "./member5.jpg";
import member6 from "./member6.jpg";
import member7 from "./member7.png";
import member8 from "./member8.jpg";
import member9 from "./member9.jpg";
import member10 from "./member10.png";

const members = [
    { img: member1, name: "Harshil Thaker", position: "Co-Founder/CMO", school: "Creative Director Harshil Thaker Media", other: "Civil Engineering Graduate(EIT) Rutgers University" },
    { img: member3, name: "Krish Dobaria", position: "Co-Founder/CFO", school: "Economics Graduate Temple University", other: "" },
    { img: member4, name: "Ishaan Mukerji", position: "Director of Outreach", school: "Finance Student Temple University", other: "Intern at Accel" },
    { img: member5, name: "Krish Patel", position: "Philadelphia Branch Operations Manager", school: "Finance and Accounting Student Drexel University", other: "" },
    { img: member6, name: "Emmanuel Charles", position: "Penn State University Branch Operations Manager", school: "Science of Technology Graduate Penn State University", other: "" },
    { img: member7, name: "Parth Shah", position: "New York City Branch Operations Manager", school: "Finance Graudate Rutgers University", other: "Financial Operations at Major Banking Corporation" },
    { img: member8, name: "Sana Raza", position: "Social Media Intern", school: "Economics Student Rutgers University", other: "Photographer" },
    { img: member9, name: "Khushi Gupta", position: "Social Media Intern", school: "Marketing Student Rutgers University", other: "Model" },
    { img: member10, name: "Brandon Him", position: "Official Company Videographer", school: "Finance Student Temple University", other: "" },
];

const Board = () => {
    return (
        <div className="board-section">
            <div className="board-image-container">
                <img src={boardImage} alt="Board" className="board-full-image" />
            </div>
            <div className="board-description">
                <p>
                    The Apeiron Group is a cutting edge hospitality and nightlife company creating immersive party
                    experiences across major U.S. cities. Known for our themed events, artist showcases, and sold out nights,
                    we’re building a culture driven platform that pushes the boundaries of nightlife with long term plans to
                    expand into concert production.
                </p>

                <p className="board-highlight">
                    Below is the team that brings Apeiron events to life.
                </p>
            </div>
            <div className="board-grid">
                <div className="member-row row-three">
                    {members.slice(0, 3).map((m, i) => (
                        <div className="member-card" key={i}>
                            <img src={m.img} alt={m.name} className="member-photo" />
                            <div className="member-info">
                                <h3 className="member-name">{m.name}</h3>
                                <h4 className="member-position">{m.position}</h4>
                                <p className="member-school">{m.school}</p>
                                <p className="member-other">{m.other}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="member-row row-three">
                    {members.slice(3, 6).map((m, i) => (
                        <div className="member-card" key={i + 3}>
                            <img src={m.img} alt={m.name} className="member-photo" />
                            <div className="member-info">
                                <h3 className="member-name">{m.name}</h3>
                                <h4 className="member-position">{m.position}</h4>
                                <p className="member-school">{m.school}</p>
                                <p className="member-other">{m.other}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="member-row row-three">
                    {members.slice(6, 9).map((m, i) => (
                        <div className="member-card" key={i + 6}>
                            <img src={m.img} alt={m.name} className="member-photo" />
                            <div className="member-info">
                                <h3 className="member-name">{m.name}</h3>
                                <h4 className="member-position">{m.position}</h4>
                                <p className="member-school">{m.school}</p>
                                <p className="member-other">{m.other}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
