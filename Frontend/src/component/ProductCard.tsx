import React from "react";
import { Product } from "../hooks/useProducts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  id: number;
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(product.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
