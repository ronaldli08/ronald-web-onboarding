import supabase from "../client";

export interface PostRow {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string;
  num_likes: number;
  Locations: {
    city_name: string;
    state_abbr: string;
  };
}

export async function fetchAllRows(): Promise<PostRow[]> {
  const { data, error } = await supabase
    .from("Posts")
    .select("*, Locations(city_name, state_abbr)");

  if (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }

  return data;
}
