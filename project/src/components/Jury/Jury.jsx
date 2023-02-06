import React, { useState } from "react";
import { FetchData } from "../../api";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Jury = () => {
  const jury = FetchData("http://localhost:3010/jury");
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
    <div>
      <ul className="list-unstyled">
        {jury?.map((member) => {
          return (
            <li key={member.id}>
              <div className="row">
                <div className="col-auto">
                  <img
                    className="img-fluid"
                    style={{
                      width: 35,
                      height: 35,
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: 35,
                    }}
                    src="https://img.freepik.com/free-vector/cute-baby-lion-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3783.jpg?w=1060&t=st=1675430518~exp=1675431118~hmac=8a2a842d984a92808a19e34fffa63d666b3e43785fac01e7ca1fd2c6ebcddfbd"
                    alt="teacher"
                  />
                </div>

                <h6 className="col d-flex justify-content-start align-items-start">
                  Namn Efternamn
                </h6>

                <span className="col-auto">{linkName}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>

    //
    //   </div>
  );
};

export default Jury;
