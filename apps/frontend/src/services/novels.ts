import { supabase } from "@/lib/supabase"

export async function getNovels() {
  const { data, error } = await supabase
    .from("novels")
    .select("*")
    .limit(20)

  if (error) {
    console.error(error)
    return []
  }

  return data
}
