import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

// Styled
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navigateToSubRoute = () => {
    navigate(title);
  };

  return (
    <CategoryPreviewContainer>
      <Title onClick={navigateToSubRoute}>
        <span>{title.toUpperCase()}</span>
      </Title>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
