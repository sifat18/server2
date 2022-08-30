import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(
        (state) => state.videos
    );
    const match = useMatch("/");
    const navigate = useNavigate();
    const { tags, search } = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchVideos({ tags, search,author }));
    }, [dispatch, tags, search,author]);

    const handleAuthorChange = (e,author) => {
        e.preventDefault();
        setAuthor(author)

        // if user is not in home page, redirect to home page
        if (!match) {
            navigate("/");
        }
    };
    // decide what to render
    let content;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos found!</div>;
    }

    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map((video) => (
            <VideoGridItem key={video.id} video={video} handleAuthorChange={handleAuthorChange}/>
        ));
    }
    
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}
