import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// icons
const ArrowDownIcon = <IoIosArrowDown />;
const ArrowUpIcon = <IoIosArrowUp />;

class JuryItem extends Component {
  state = {
    isActive: false,
  };

  renderDescription = () => {
    const { juryData } = this.props;
    const { description, instrument, titel } = juryData;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div className="description m-2">
          <p>{description}</p>
          <span className="d-flex gap-2 mb-1">
            <span>{titel}</span>
            <span>•</span>
            <span>{instrument}</span>
          </span>
        </div>
      );
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
    const icons = isActive ? ArrowUpIcon : ArrowDownIcon;
    //const TextInstead = isActive ? "Read Less" : "Read More";   Få text om inte icons fungera?

    return (
      <button
        className="button bg-transparent "
        style={{ border: "none" }}
        type="button"
        onClick={this.onToggleDescription}
      >
        {icons}
      </button>
    );
  };

  render() {
    const { juryData } = this.props;
    const { name, img, country } = juryData;

    return (
      <div>
        <div className="container">
          <li className="border-bottom ">
            <div className="row my-3">
              <div className="col-auto">
                <img
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: 60,
                  }}
                  src={img}
                  alt="/"
                />
              </div>

              <div className="col mt-2">
                <p className="mb-0  ">{name}</p>
                <p className="mb-0  ">{country}</p>
              </div>
              <div className="col-auto">{this.renderActiveIcon()}</div>
            </div>

            <div className="text-muted py-2">{this.renderDescription()}</div>
          </li>
        </div>
      </div>
    );
  }
}
export default JuryItem;
