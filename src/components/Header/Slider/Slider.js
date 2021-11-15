import imagen1 from "../../../Assets/images/slider-1.png";
import imagen2 from "../../../Assets/images/section3-image.png";
import imagen3 from "../../../Assets/images/slider-4.png";
import { Container } from "react-bootstrap";

export default function Slider({ imgIndex }) {
  const miArr = [imagen1, imagen2, imagen3];
console.log(imgIndex)
  return (
    <Container fluid className="my-img-slider"  >
      <img src={miArr[imgIndex]} className="my-image" />
    </Container>
  );
}

