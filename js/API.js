const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f9a480c414msh33a80a829a2cbb4p1f7f23jsncf158dc7b5ec",
    "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
  },
};

export const AJAX = async function (id) {
  try {
    const response = await fetch(
      `https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`,
      options
    );
    const data = await response.json();
    // if (data.total_results==0) throw new Error(` there is no results`);

    return data;
  } catch (err) {
    throw err;
  }
};
