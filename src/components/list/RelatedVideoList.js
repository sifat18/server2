import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from 'react-router-dom';
import Loading from "../../components/ui/Loading";
import { authorAdd, searchRemove, tagRemoveAll } from "../../features/filter/filterSlice";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ currentVideoId, tags }) {
    const dispatch = useDispatch();
    const { relatedVideos, isLoading, isError, error } = useSelector(
        (state) => state.relatedVideos
    );

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
    }, [dispatch, tags, currentVideoId]);

    const match = useMatch("/");
    const navigate = useNavigate();
    const handleAuthorChange = (e,author) => {
        e.preventDefault();
       dispatch(tagRemoveAll)

        dispatch(searchRemove)
        console.log(tags) 

        dispatch(authorAdd(author))
        // setAuthor(author)

        // if user is not in home page, redirect to home page
        if (!match) {
            navigate("/");
        }
    };
    // decide what to render
    let content = null;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <div className="col-span-12">No related videos found!</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (
            <RelatedVideoListItem key={video.id} video={video} handleAuthorChange={handleAuthorChange}/>
        ));
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
