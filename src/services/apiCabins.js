import { SiUphold } from "react-icons/si";
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not loaded");
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  console.log("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  console.log(data);
  return data;
}
export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  
  // https://hlfsvhzdyivtamdpcnlo.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg
  const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  console.log(data);
  return data;
}
