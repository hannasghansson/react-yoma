import React, { Component } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

//Icons
const ArrowDownIcon = <IoIosArrowDown />;
const ArrowUpIcon = <IoIosArrowUp />;

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

  renderActiveIcon = () => {
    const { isActive } = this.state;
    const icons = isActive ? ArrowUpIcon : ArrowDownIcon;
    //const TextInstead = isActive ? "Read Less" : "Read More";  Få text om inte icons fungera?

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

        <div>
          <p className="text-muted p-2">{this.renderDescription()}</p>
        </div>
      </div>
    );
  }
}
export default ListItem;
