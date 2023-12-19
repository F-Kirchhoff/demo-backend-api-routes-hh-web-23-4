//what should be sent as an answer?
//send back a list of all jokes in our data

import { jokes } from "@/lib/data";

export default function handler(request, response) {
  console.log("Request to /api/jokes");
  response.status(200).json(jokes);
}
