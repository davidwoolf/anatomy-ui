import { error } from "@sveltejs/kit";

export async function load() {
  /** TODO: remove when ready */
  error(404, "page not found");
}
