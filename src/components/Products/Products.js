import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/styles/_products-styles.scss";
import imgRightArrow from "../../Assets/images/arrow-right-circle.png";
import imgLeftArrow from "../../Assets/images/arrow-left-circle.png";
import imgGithub from "../../Assets/images/github2.png";
import { useState } from "react";

export default () => {
  const [slideArrow, setSlideArrow] = useState(0);

  const moveLeft = () => {
    if (slideArrow === -1) {
      setSlideArrow(1);
    } else {
      setSlideArrow(slideArrow - 1);
    }
  };

  const moveRight = () => {
    if (slideArrow === 1) {
      setSlideArrow(-1);
    } else {
      setSlideArrow(slideArrow + 1);
    }
  };

  console.log(slideArrow);

  return slideArrow === 0 ? (
    <div id="products" className="products">
      <Container className="my-container-products">
        <Col xl={10} lg={10} sm={10} className="my-img-products">
          <Col xl={6} lg={6} sm={8} className="my-slider-products">
            <div className="products-content">
              <h3 className="products-subtitle">Sed ut perspiciatis</h3>
              <h2 className="products-h2">Nemo Enim</h2>
              <p className="products-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="products-arrows">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Col>
      </Container>
    </div>
  ) : slideArrow < 0 ? (
    <div id="products" className="products">
      <Container className="my-container-products">
        <Col xl={10} lg={10} sm={10} className="my-img-products">
          <Col xl={6} lg={6} sm={8} className="my-slider-products">
            <div className="products-content">

              <h1>Lorem ipsum dolor sit amet </h1>
              <h2>consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.</h2>
              <a className="products-p" href="https://example.com">
                
              </a>

              <div className="products-arrows">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Col>
      </Container>
    </div>
  ) : (
    <div id="products" className="products">
      <Container className="my-container-products">
        <Col xl={10} lg={10} sm={10} className="my-img-products">
          <Col xl={6} lg={6} sm={8} className="my-slider-products">
            <div className="products-content">

              <h1>Hola Mundo</h1>
              <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.</h3>
              <a className="products-p" href="https://example.com">
                
              </a>

              <div className="products-arrows">
                <a>
                  <img
                    src={imgLeftArrow}
                    alt="flecha izquierda"
                    onClick={moveLeft}
                  />
                </a>
                <a>
                  <img
                    src={imgRightArrow}
                    alt="flecha derecha"
                    onClick={moveRight}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Col>
      </Container>
    </div>
  );
};
