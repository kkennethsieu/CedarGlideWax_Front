export function getDaysAgo(createdAt) {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInMs = now - createdDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
}
