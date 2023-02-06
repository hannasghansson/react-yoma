import { useState } from "react";
import { FetchData } from "../../api";
import Jury from "./Jury";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const JuryIteam = () => {
  const jury = FetchData("http://localhost:3010/jury");
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
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
                  borderRadius: 35,
                }}
                src={member.img}
                alt="member"
              />
              {member.firstName} {member.lastName}
            </div>
            <div
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <span className="col-auto">{linkName}</span>
            </div>

            <p>{readMore && member.description}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default JuryIteam;
