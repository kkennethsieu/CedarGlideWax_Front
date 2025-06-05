import supabase from "./supabase";

export async function getReviews() {
  const { data: reviews, error } = await supabase.from("reviews").select("*");
  if (error) {
    console.log(error);
    throw new Error("Error fetching reviews");
  }

  return reviews;
}
