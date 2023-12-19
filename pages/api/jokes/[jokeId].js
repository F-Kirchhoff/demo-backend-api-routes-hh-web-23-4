import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { jokeId } = request.query;

  console.log(jokeId);

  const joke = jokes.find((item) => item.id === jokeId);

  if (!joke) {
    response
      .status(404)
      .json({ status: `Joke with id ${jokeId} doesn't exist.` });
    return;
  }

  response.status(200).json(joke);
}
