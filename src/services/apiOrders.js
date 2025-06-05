import supabase from "./supabase";

export async function addOrder(order) {
  const { data, error } = await supabase.from("orders").insert([order]);

  if (error) {
    console.error("Error inserting order:", error.message);
    throw new Error("Could not add order");
  }

  return data;
}

export async function getOrder(orderId) {
  const { data: order, error } = await supabase
    .from("orders")
    .select("*")
    .eq("orderId", orderId);
  if (error) {
    console.log(error);
    throw new Error("Error fetching order");
  }
  return order;
}
