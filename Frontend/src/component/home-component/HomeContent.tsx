import TopCarousel from "./TopCarousel";
import ContentContainer from "../ContentContainer";
import TrendyProduct from "./TrendyProductComponent/TrendyProduct";

const HomeContent = () => {
  return (
    <ContentContainer>
      <TopCarousel />
      <TrendyProduct />
    </ContentContainer>
  );
};

export default HomeContent;
