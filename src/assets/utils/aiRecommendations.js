export const getRecommendedPlaces = (allPlaces, currentPlace) => {
  return allPlaces.filter(
    (p) =>
      p.category === currentPlace.category &&
      p.id !== currentPlace.id
  ).slice(0, 3);
};
