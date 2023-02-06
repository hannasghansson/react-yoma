import React from "react";
import { FetchData } from "../../api";

const Jury = () => {
  const jury = FetchData("http://localhost:3010/jury");

  return (
    <div>
      <ul className="list-unstyled col">
        {jury?.map((member) => {
          return (
            <li key={member.id}>
              <div className="col-6">
                <img
                  className="me-3"
                  style={{
                    width: 35,
                    height: 35,
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 32,
                  }}
                  src={member.img}
                  alt="member"
                />
                {member.firstName} {member.lastName}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Jury;
