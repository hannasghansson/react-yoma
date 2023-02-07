import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

//img
const ReadMoreImg =
  "https://p.kindpng.com/picc/s/238-2389096_arrow-down-small-icon-down-open-png-transparent.png";
const ReadLessImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Tu0Cnicndj2VBDKpVsJ_NTivQgvhbC52zq1et_GPeR-EbC1pw2LUZEiqm7B45nYEsXo&usqp=CAU";

class ListItem extends Component {
  state = {
    isActive: false,
  };

  renderDescription = () => {
    const { juryData } = this.props;
    const { description } = juryData;
    const { isActive } = this.state;

    if (isActive) {
      return <p className="description">{description}</p>;
    }
    return null;
  };

  onToggleDescription = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderCorrectImg = () => {
    const { isActive } = this.state;
    const image = isActive ? ReadLessImg : ReadMoreImg;
    const altText = isActive ? "minus" : "plus";

    return (
      <button
        className="button"
        style={{ border: "none", backgroundColor: "white" }}
        type="button"
        onClick={this.onToggleDescription}
      >
        <img
          style={{
            width: 20,
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="image"
          src={image}
          alt={altText}
        />
      </button>

      //
    );
  };

  render() {
    const { juryData } = this.props;
    const { name, img, country } = juryData;

    return (
      <article className=" container border-bottom mt-2">
        <li className="row">
          <div className="col">
            <img
              style={{
                width: 55,
                height: 55,
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 55,
              }}
              src={img}
              alt="/"
            />
          </div>

          <div className="col">
            <p className="mb-0">{name}</p>
            <p>{country}</p>
          </div>

          <div className="col">{this.renderCorrectImg()}</div>

          {this.renderDescription()}
        </li>
      </article>
    );
  }
}
export default ListItem;
