import axios from "../../utils/axios";

export const getVideos = async (tags, search,author,page) => {
    let queryString=`_page=${page}&_limit=3`;


    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }
    if (author !== "") {
        queryString= `&author_like=${author}`;
    }
  
    const response = await axios.get(`/videos/?${queryString}`);

    return response.data;
};
