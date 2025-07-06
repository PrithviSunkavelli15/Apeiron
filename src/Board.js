import React from "react";
import "./Board.css";
import boardImage from "./Team.png";
import member1 from "./member1.jpg";
import member3 from "./member3.jpg";
import member4 from "./member4.jpg";
import member5 from "./member5.PNG";
import member6 from "./member6.jpg";
import member7 from "./member7.png";
import member8 from "./member8.jpg";
import member9 from "./member9.jpg";
import member10 from "./member10.png";

const members = [
    {
        img: member1,
        name: "Harshil Thaker",
        position: "Co-Founder/CMO",
        instagram: "https://www.instagram.com/_harshilthaker_?igsh=MWtlcnh2ODY2emZ1eQ=="
    },
    {
        img: member3,
        name: "Krish Dobaria",
        position: "Co-Founder/CFO",
        instagram: "https://www.instagram.com/krish.dobaria?igsh=MTBlanRvMzF4bmdqZw%3D%3D&utm_source=qr"
    },
    {
        img: member4,
        name: "Ishaan Mukerji",
        position: "Chief Operating Officer",
        instagram: "https://www.instagram.com/_ishaanmukerji?igsh=MWJwdHpqcmNjbjM0Nw=="
    },
    {
        img: member5,
        name: "Jasper Merigala",
        position: "Penn State University Branch Operations Manager",
        instagram: "https://www.instagram.com/jaspermerigala_?igsh=MTRpamRpMmNmYXAzMg=="
    },
    {
        img: member6,
        name: "Emmanuel Charles",
        position: "Penn State University Branch Operations Manager",
        instagram: "https://www.instagram.com/emmaniboi?igsh=bjdtaDc3cG0weDA="
    },
    {
        img: member7,
        name: "Parth Shah",
        position: "New York City Branch Operations Manager",
        instagram: "https://www.instagram.com/parthhshah_?igsh=MThnZGZybWYxdzVkcg=="
    },
    {
        img: member8,
        name: "Sana Raza",
        position: "Social Media Intern",
        instagram: "https://www.instagram.com/_sana.raza_?igsh=d3U0NGZib3ptejJ6"
    },
    {
        img: member9,
        name: "Khushi Gupta",
        position: "Social Media Intern",
        instagram: "https://www.instagram.com/khushi05gupta?igsh=ZWpobTA0NGpsbWN0"
    },
    {
        img: member10,
        name: "Brandon Him",
        position: "Official Company Videographer",
        instagram: "https://www.instagram.com/yowtfbrandon?igsh=eDVtM2hrb2xoOGF3"
    }
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
                {[0, 3, 6].map((startIndex) => (
                    <div className="member-row row-three" key={startIndex}>
                        {members.slice(startIndex, startIndex + 3).map((m, i) => (
                            <div className="member-card" key={i + startIndex}>
                                <a href={m.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src={m.img} alt={m.name} className="member-photo hover-scale" />
                                </a>
                                <div className="member-info">
                                    <h3 className="member-name">{m.name}</h3>
                                    <h4 className="member-position">{m.position}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
