export const generateReviewSummary = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return "No reviews yet to generate summary.";
  }

  let positive = 0;
  let negative = 0;

  reviews.forEach((rev) => {
    const text = rev.comment.toLowerCase();
    if (
      text.includes("good") ||
      text.includes("beautiful") ||
      text.includes("amazing") ||
      text.includes("peaceful")
    ) {
      positive++;
    }
    if (
      text.includes("bad") ||
      text.includes("dirty") ||
      text.includes("crowded")
    ) {
      negative++;
    }
  });

  if (positive > negative) {
    return "Most visitors love this place for its beauty and peaceful environment.";
  } else if (negative > positive) {
    return "Some visitors feel this place needs improvement in maintenance and crowd control.";
  } else {
    return "Visitors have mixed opinions about this place.";
  }
};
