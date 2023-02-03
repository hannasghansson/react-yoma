import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ReadMore = () => {
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
    <div className="container">
      <div className="border-bottom">
        <div
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <div className="row">
            <h2 className="col">Namn Efternamn</h2>
            <span className="col">{linkName}</span>
          </div>

          <p>{readMore && content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
