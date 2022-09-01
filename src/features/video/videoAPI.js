import axios from "../../utils/axios";

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);

    return response.data;
};

// 

export const updateLike = async (id,curVal) => {
    const response = await fetch(`http://localhost:9000/videos//${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            likes: curVal+1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const todo = await response.json();

    return todo
};
