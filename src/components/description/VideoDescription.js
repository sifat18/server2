import LikeUnlike from "./LikeUnlike";
import { useDispatch } from 'react-redux';
import { likePost } from "../../features/video/videoSlice";

export default function VideoDescription({ video }) {
    const { title, date, description,likes, unlikes,id } = video;
   
    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                {title}
            </h1>
            <div className="pb-4 flex items-center space-between border-b">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                </h2>

                <LikeUnlike likes={likes} unlikes={unlikes} id={id}/>
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                {description}
            </div>
        </div>
    );
}
