import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
export default class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageOne: [
        {

            gameOne: "Montepellier HSC VS AS Saint Etienne",
            gameOneTotalPrice: 45.0,
            gameTwo: "O.Marseille VS Girondins de Bordeaux",
            gameTwoTotalPrice: 35.44,
            gameThree: "Tournament Championship Game",
            gameThreeTotalPrice: 50.44
          ,
      
            activityOne: "Access to OM special area in the stadium",
            activityOneTotalPrice: 10,
            activityTwo: "Training Session + Transport on July 19th. Time TBC",
            activityTwoTotalPrice: 20,
            activityThree:
              "Exclusive Party on Saturday July 20th, Evening-Time TBC",
            activityThreeTotalPRice: 30,
            activityFour:
              "Friendly Game on Wednesday July 24th, Afternoon-Time TBC",
            activityFourTotalPrice: 40,
 
          packageId: Number(0)
        }
      ],
      packageTwo: [
        {
      
            gameOne: "Montepellier HSC VS AS Saint Etienne",
            gameOneTotalPrice: 45.0,
            gameTwo: "O.Marseille VS Girondins de Bordeaux",
            gameTwoTotalPrice: 35.44,
  
   
            activityOne: "Access to OM special area in the stadium",
            activityOneTotalPrice: 10,
            activityTwo: "Training Session + Transport on July 19th. Time TBC",
            activityTwoTotalPrice: 20,
            activityThree:
              "Exclusive Party on Saturday July 20th, Evening-Time TBC",
            activityThreeTotalPRice: 30,
  
          packageId: Number(1)
        }
      ],
      packageThree: [
        {
   
            gameTwo: "O.Marseille VS Girondins de Bordeaux",
            gameTwoTotalPrice: 35.44,
            gameThree: "Tournament Championship Game",
            gameThreeTotalPrice: 50.44,

   
            activityOne: "Access to OM special area in the stadium",
            activityOneTotalPrice: 10,
            activityThree:
              "Exclusive Party on Saturday July 20th, Evening-Time TBC",
            activityThreeTotalPRice: 30,
            activityFour:
              "Friendly Game on Wednesday July 24th, Afternoon-Time TBC",
            activityFourTotalPrice: 40,
  
          packageId: Number(2)
        }
      ],
      option: Number(0)
    };
  }

  numberOfTickets = e => {};

  onPackageClick = e => {
    e.preventDefault();

    console.log("entro en on package click");

    let packageOne = this.state.packageOne[0];
    let packageTwo = this.state.packageTwo[0];
    let packageThree = this.state.packageThree[0];
    if (e.target.id == packageOne.packageId) {
      console.log("you hit package one baby ");

      this.props.onPackageClick(this.state.packageOne);
    }
    if (e.target.id == packageTwo.packageId) {
      console.log("you hit package two baby ");

      this.props.onPackageClick(this.state.packageTwo);
    }
    if (e.target.id == packageThree.packageId) {
      console.log("you hit package three baby ");

      this.props.onPackageClick(this.state.packageThree);
    }
  };

  render() {
    // OwlCarousel Option for Prices
    console.log(this.state);
    const options = {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 2,
        nav: false,
        dots: true
      },
      767: {
        items: 2,
        nav: false,
        dots: true
      },
      992: {
        items: 3,
        nav: false,
        dots: true
      }
      // 1000:{
      //     items:4
      // }
    };

    // Dynamic Price Data Easy to Update
    let data = [
      {
        title: "The Hat Trick",
        id: 0,
        gameOne: "Montepellier HSC VS AS Saint Etienne",
        gameTwo: "O.Marseille VS Girondins de Bordeaux",
        gameThree: "Tournament Championship Game",
        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityTwo: "Training Session + Transport on July 19th. Time TBC",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"
        }
      },
      {
        title: "The Double Header",
        id: 1,
        gameOne: "Montepellier HSC VS AS Saint Etienne",
        gameTwo: "O.Marseille VS Girondins de Bordeaux",
        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityTwo: "Training Session + Transport on July 19th. Time TBC",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC"
        }
      },
      {
        title: "The Double Header pt 2",
        id: 2,
        gameTwo: "O.Marseille VS Girondins de Bordeaux",
        gameThree: "Tournament Championship Game",
        activities: {
          activityOne: "Access to OM special area in the stadium",
          activityThree:
            "Exclusive Party on Saturday July 20th, Evening-Time TBC",
          activityFour:
            "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"
        }
      }
      // {
      //   title: "The Golden Goal",
      //   id: 3,
      //   gameOne: "Montepellier HSC VS AS Saint Etienne",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo: "Training Session + Transport on July 19th. Time TBC",
      //     activityThree:
      //     "Exclusive Party on Saturday July 20th, Evening-Time TBC",
      //   }
      // }, {
      //   title: "The Golden Goal pt 2",
      //   id: 4,
      //   gameTwo: "O.Marseille VS Girondins de Bordeaux",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo: "Training Session + Transport on July 19th. Time TBC",
      //     activityThree:
      //     "Exclusive Party on Saturday July 20th, Evening-Time TBC",
      //   }
      // }
      // , {
      //   title: "The Golden Goal pt 3",
      //   id: 5,
      //   gameThree: "Tournament Championship Game",
      //   activities: {
      //     activityOne: "Access to OM special area in the stadium",
      //     activityTwo:
      //     "Friendly Game on Wednesday July 24th, Afternoon-Time TBC"

      //   }
      // }
      // {title: 'D.C United Vs Marseille', lable:'07/29/2019', price:'190', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
      // {title: 'D.C United Vs Marseilled', lable:'07/29/2019', price:'359', features:'<li>Section 100, Row 02</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li><li>priority email support</li>', link:'#'},
    ];

    // Dynamic Price Data Loop
    let DataList = data.map((val, i) => {
      let gameOne = val.gameOne;
      let gameTwo = val.gameTwo;
      let gameThree = val.gameThree;
      let activityOne = val.activities.activityOne;
      let activityTwo = val.activities.activityTwo;
      let activityThree = val.activities.activityThree;
      let activityFour = val.activities.activityFour;

      if (
        gameOne != undefined &&
        gameTwo != undefined &&
        gameThree != undefined
      ) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <ul> */}
                <p>{gameOne}</p>
                <br />
                <p>{gameTwo}</p>
                <br />
                <p>{gameThree}</p>
                <br />
                {/* </ul> */}

                <h5 className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul> */}
              <p>{activityOne}</p>
              <br />
              <p>{activityTwo}</p>
              <br />
              <p>{activityThree}</p>
              <br />
              <p>{activityFour}</p>
              {/* </ul> */}

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                // onChange={e => this.handleRoomPrince(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }

      if (gameOne != undefined && gameTwo != undefined) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <ul> */}
                <p>{gameOne}</p>
                <br />
                <p>{gameTwo}</p>
                <br />
                <br />
                <br />
                <br />
                {/* </ul> */}

                <h5 className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul id="special"> */}
              <p>{activityOne}</p>
              <br />
              <p>{activityTwo}</p>
              <br />
              <p>{activityThree}</p>
              <br />
              <br />
              <br />
              <br />

              {/* </ul> */}

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                // onChange={e => this.handleRoomPrince(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (gameTwo != undefined && gameThree != undefined) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                {/* <ul> */}
                <p>{gameTwo}</p>
                <br />
                <p>{gameThree}</p>
                <br />
                <br />
                <br />
                <br />
                {/* </ul> */}

                <h5 className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              {/* <ul id="specialTwo"> */}
              <p>{activityOne}</p>
              <br />
              <p>{activityThree}</p>
              <br />
              <p>{activityFour}</p>
              <br />
              <br />
              <br />
              <br />

              {/* </ul> */}

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                // onChange={e => this.handleRoomPrince(e)}
                type="number"
              />

              <div className="price-plan text-center">
                <button
                  onClick={this.onPackageClick}
                  id={val.id}
                  className="btn btn-primary bookButton"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      }
      if (gameOne != undefined) {
        return (
          <div className="item" id="tickets" key={i}>
            <div className="package-box">
              <h3 className="packageTitle">{val.title}</h3>
              <div className="price-box">
                <h3 className="packageGameHeader">Games Included</h3>
                <ul>
                  <li className="games">{gameOne}</li>
                  <br />
                  <br />
                  <br />
                  <br />
                </ul>

                <h5 className="plan-clr">
                  <span className="d-block" />
                </h5>
              </div>
              <br />
              <h3 className="packageTitle">Activities</h3>
              <ul>
                <li className="activities">{activityOne}</li>
                <br />
                <li className="activities">{activityThree}</li>
                <br />
                <li className="activities">{activityFour}</li>
                <br />
                <br />
                <br />
                <br />
                <br />
              </ul>

              <br />
              <input
                autoComplete="off"
                className="form-control "
                id="quantity"
                placeholder="Quantity  "
                name="quantity"
                // onChange={e => this.handleRoomPrince(e)}
                type="number"
              />

              <div className="price-plan text-center" />
              <button
                onClick={this.onPackageClick}
                id={val.id}
                className="btn btn-primary bookButton"
              >
                Add
              </button>
            </div>
          </div>
        );
      }
    });

    return (
      <section className="backgroundColor" id="tickets">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 id="packageHeader" className="hotelTitle">
                  The Packages
                </h2>
                <img
                  src="assets/images/blueTitleLine.png"
                  alt="title-line"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <OwlCarousel
                className="plan-slider owl-carousel owl-theme"
                loop={false}
                items={3}
                margin={15}
                navClass={["owl-prev", "owl-next"]}
                navText={[
                  '<i class="fa fa-angle-left"></i>',
                  '<i class="fa fa-angle-right"></i>'
                ]}
                nav={true}
                dots={false}
                responsive={options}
              >
                {DataList}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
