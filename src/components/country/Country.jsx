import React from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { useContext } from "react";

const Country = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Travel Tour by Country
          </h2>
          <p className="mt-2 text-gray-600">
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* 1 */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p1.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                Italy
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Explore the vast tapestry of the United States through
                    captivating narratives and immersive storytelling in our USA
                    Travel Blog.Uncover the country's rich diversity, from the
                    iconic skylines
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* 2 */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p2.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                Spain
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Embark on a mesmerizing journey through the enchanting
                    landscapes and vibrant culture of Spain with our Spain
                    Travel Blog. Immerse yourself in the allure of this
                    sun-kissed paradise
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* 3 */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p3.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                France
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Embark on a journey through the timeless charm and cultural
                    splendor of France with our France Travel Blog. Immerse
                    yourself in the allure of this enchanting country
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* 4 */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p5.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                Greece
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Embark on an odyssey through the ancient wonders and
                    sun-drenched landscapes of Greece with our Greece Travel
                    Blog. Immerse yourself in the timeless tales of mythology
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>
          {/* 5  */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p4.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                India
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Embark on a kaleidoscopic journey through the vibrant
                    tapestry of India with our India Travel Blog. Immerse
                    yourself in the land of contrasts, where traditions
                    seamlessly blend with modern dynamism
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>
          {/* 6  */}
          <Card>
            <CardBody
              style={{
                background:
                  mode === "dark"
                    ? "linear-gradient(0deg, rgba(228,230,217,1) 0%, rgba(38,138,138,1) 90%, rgba(9,39,31,1) 100%)"
                    : "white",
              }}
            >
              <img
                src="/p6.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: mode === "dark" ? "white" : "black",
                }}
              >
                Thailand
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right">
                    Embark on an exotic journey through the captivating
                    landscapes and vibrant culture of Thailand with our Thailand
                    Travel Blog. Immerse yourself in the allure of this tropical
                    paradise
                  </i>
                </span>
              </p>
              <div className="flex items-center justify-between">
                <Button color="teal" onClick={() => navigate("/allblogs")}>
                  Read More
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Country;
