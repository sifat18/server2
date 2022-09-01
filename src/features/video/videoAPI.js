import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

// 

export const updateLike = async (id,likes) => {
    const response = await fetch(`http://localhost:9000/videos//${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            likes: likes,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const video = await response.json();
console.log( 'api',video)
    return video.likes
};
export const updateUnLike = async (id,unlikes) => {
    const response = await fetch(`http://localhost:9000/videos//${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            unlikes: unlikes,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const video = await response.json();
console.log( 'api',video)
    return video.unlikes
};
