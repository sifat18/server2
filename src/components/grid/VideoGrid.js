import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { authorAdd, authorRemove, pageChange, searchRemove, tagRemoveAll } from "../../features/filter/filterSlice";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(
        (state) => state.videos
    );
// my code
    // const [author, setAuthor] = useState('')

    const match = useMatch("/");
    const navigate = useNavigate();
    const { tags, search,author,page } = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchVideos({ tags, search,author,page }));
    }, [dispatch, tags, search,author,page]);

    
    const handleAuthorChange = (e,author) => {
        e.preventDefault();
       dispatch(tagRemoveAll([]))

        dispatch(searchRemove(""))

        dispatch(authorAdd(author))
        // setAuthor(author)

        // if user is not in home page, redirect to home page
        if (!match) {
            navigate("/");
        }
    };
    const handleReset=(e)=>{
        e.preventDefault();
        console.log('hitting')
         dispatch(tagRemoveAll([]))
         dispatch(authorRemove(''))
         dispatch(searchRemove(""))
         dispatch(pageChange(1))
             }
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
        <>
        <div className="ml-auto mr-24 bg-green-100 text-white-600  w-20 py-2  px-5 rounded-full cursor-pointer" onClick={(e)=>handleReset(e)}>
        Reset
        </div>
        <section className="pt-12">
        
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
        </>    );
}
