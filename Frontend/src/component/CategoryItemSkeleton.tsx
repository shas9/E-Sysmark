import { Skeleton, ListItem, HStack, SkeletonCircle } from "@chakra-ui/react";

const CategoryItemSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack alignItems="center">
        <SkeletonCircle size="32px" startColor="gray.300" endColor="gray.600" />
        <Skeleton
          height="1.5rem"
          width="80%"
          startColor="gray.300"
          endColor="gray.600"
        />
      </HStack>
    </ListItem>
  );
};

export default CategoryItemSkeleton;
