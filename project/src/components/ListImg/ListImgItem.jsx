import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

//img
const ReadMoreImg =
  "https://p.kindpng.com/picc/s/238-2389096_arrow-down-small-icon-down-open-png-transparent.png";
const ReadLessImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Tu0Cnicndj2VBDKpVsJ_NTivQgvhbC52zq1et_GPeR-EbC1pw2LUZEiqm7B45nYEsXo&usqp=CAU";

class ListImgItem extends Component {
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

  renderActiveIcon = () => {
    const { isActive } = this.state;
    const image = isActive ? ReadLessImg : ReadMoreImg;
    const TextInstead = isActive ? "Read Less" : "Read More";

    return (
      <button
        className="button bg-transparent "
        style={{ border: "none" }}
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
          alt={TextInstead}
        />
      </button>
    );
  };

  render() {
    const { juryData } = this.props;
    const { name, img, country } = juryData;

    return (
      // <article className=" container border-bottom mt-2">
      //   <li>
      //     <div className="d-flex">
      //       <div className="d-flex-shrink-0">
      //         <img
      //           style={{
      //             width: 55,
      //             height: 55,
      //             objectFit: "cover",
      //             objectPosition: "center",
      //             borderRadius: 55,
      //           }}
      //           src={img}
      //           alt="/"
      //         />
      //       </div>

      //       <div className="ms-3">
      //         <p className="mb-0">{name}</p>
      //         <p>{country}</p>
      //       </div>

      //       <div className="d-flex align-items-center">
      //         {this.renderActiveIcon()}
      //       </div>
      //     </div>

      //     {this.renderDescription()}
      //   </li>
      // </article>

      // <div className="container ">
      //   <li className=" border-bottom">
      //     <div className="d-colum align-items-stretch row my-4">
      //       <div className="col-auto">
      //         <img
      //           style={{
      //             width: 60,
      //             height: 60,
      //             objectFit: "cover",
      //             objectPosition: "center",
      //             borderRadius: 60,
      //           }}
      //           src={img}
      //           alt="/"
      //         />
      //       </div>

      //       <div className="col ms-0 ">
      //         <p className="mb-0">{name}</p>
      //         <p className="mt-n3 fs-h2 m-0">{country}</p>
      //       </div>

      //       <div className="col-auto">{this.renderActiveIcon()}</div>
      //     </div>
      //     <p className="text-muted mb-4">{this.renderDescription()}</p>
      //   </li>
      // </div>

      <div className="border-bottom">
        <div className="d-flex align-items-center gap-2 mt-4">
          <img
            style={{
              width: 50,
              height: 50,
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 50,
            }}
            src={img}
            alt="/"
          />

          <div className="w-100">
            <p className="mb-0">{name}</p>
            <span className="d-flex gap-2 mb-1">
              <span>{country}</span>
              <span>•</span>
              <span>Test</span>
            </span>
          </div>

          <span className="col-auto">{this.renderActiveIcon()}</span>
        </div>
        <p className="text-muted p-2">{this.renderDescription()}</p>
      </div>
    );
  }
}
export default ListImgItem;
