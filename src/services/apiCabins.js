import { createClient } from "@supabase/supabase-js";
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
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  console.log(data);
  return data;
}
export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // https://hlfsvhzdyivtamdpcnlo.supabase.co/storage/v1/object/public/cabin-images/cabin_001.jpg
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  if (hasImagePath) return data;
  const { error: errorImage } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (errorImage) {
    // await supabase.from("cabins").delete().eq("id", id);
    console.error(errorImage);
    throw new Error("Image could not uploaded and cabin isn't created");
  }

  console.log(data);
  return data;
}
