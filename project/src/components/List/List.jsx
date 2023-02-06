import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";

const List = () => {
  const [readMore, setReadMore] = useState(false);
  const content = (
    <div>
      <p className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur neque ab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </p>
    </div>
  );
  const linkName = readMore ? <IoIosArrowUp /> : <IoIosArrowDown />;
  return (
    <div class="container">
      <div class="row d-flex justify-content-center mt-5 ">
        <div class="col-md-12">
          <div class="border-bottom my-1">
            <div class="d-flex justify-content-between align-items-center ">
              <div class="d-flex flex-row align-items-center ">
                <img
                  className="me-3"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 50,
                  }}
                  src="https://img.freepik.com/free-vector/cute-baby-lion-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3783.jpg?w=1060&t=st=1675430518~exp=1675431118~hmac=8a2a842d984a92808a19e34fffa63d666b3e43785fac01e7ca1fd2c6ebcddfbd"
                  alt="teacher"
                />
                <div class="d-flex flex-column">
                  <h5 className="m-0">Namn Efternamn</h5>
                  <div class="d-flex flex-row align-items-center time-text">
                    <p className="m-0">Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <span>{linkName}</span>
              </div>
            </div>

            <p className="my-3">{readMore && content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
