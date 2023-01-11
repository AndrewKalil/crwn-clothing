import React from "react";
import { useNavigate } from "react-router-dom";

// Styles
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`shop/${title}`);
  };

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body onClick={handleNavigate}>
        <h2>{title}</h2>
        <p>Shops Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
