import React from "react";
import user from "../assets/images/user.svg";
import tourImage from "../assets/images/tour-image.jpeg";
import refresh from "../assets/images/refrash.svg";
import { Card } from "react-bootstrap";
import "../assets/style/card.css";
const card = ({ des, price, day, people }) => {
  return (
    <>
      <Card className="shadow " style={{ width: "20rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          src={tourImage}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "10px",
              }}
            >
              {des}
            </Card.Title>
            <p
              className="card-text"
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#632065",
              }}
            >
              {price}
            </p>
          </div>

          <Card.Text
            style={{
              color: "#4A4A4A",
              lineHeight: "25px",
            }}
          >
            Explore Turkey in the most beautiful way
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
              <p
                className="mt-2 h5"
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  marginRight: "25px",
                }}
              >
                <img
                  src={refresh}
                  alt="refresh"
                  style={{
                    width: "17px",
                    height: "17px",
                    marginRight: "10px",
                  }}
                />{" "}
                {day} days tours{" "}
              </p>
            </div>

            <div className="d-flex justify-content-start">
              <p
                className="mt-2 h5"
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  marginRight: "25px",
                }}
              >
                {" "}
                <img
                  src={user}
                  alt="user"
                  style={{
                    width: "17px",
                    height: "17px",
                    marginRight: "10px",
                  }}
                />
                {people} Max{" "}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default card;
