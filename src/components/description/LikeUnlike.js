import { useDispatch, useSelector } from 'react-redux';
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { likePost, unlikePost } from "../../features/video/videoSlice";

export default function LikeUnlike() {
    const dispatch=useDispatch()
    const {id,likes,unlikes } = useSelector(    (state) => state.video.video);
    const likeUpdate=(id,likes)=>{
        console.log('isnde',id,likes)
       dispatch(likePost({id,likes}))
    }
    const unlikeUpdate=(id,unlikes)=>{
        console.log('isnde',id,unlikes)
       dispatch(unlikePost({id,unlikes}))
    }
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" onClick={()=>likeUpdate(id,likes)}/>
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600" >
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" onClick={()=>unlikeUpdate(id,unlikes)}/>
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600" >
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
