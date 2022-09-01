import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { useDispatch } from 'react-redux';
import { addlikes, likePost, unlikePost } from "../../features/video/videoSlice";

export default function LikeUnlike({likes,unlikes,id}) {
    const dispatch=useDispatch()
    const likeUpdate=async(id,likes)=>{
        console.log('isnde',id,likes)
       dispatch(likePost({id,likes}))
dispatch(addlikes(likes))
    }
    const unlikeUpdate=async(id,unlikes)=>{
        console.log('isnde',id,unlikes)
       dispatch(unlikePost({id,unlikes}))
// dispatch(addlikes(likes))
    }
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" onClick={()=>likeUpdate(id,likes)}/>
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600" onClick={()=>likeUpdate(id,likes)}>
                    {likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" onClick={()=>unlikeUpdate(id,unlikes)}/>
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600" onClick={()=>unlikeUpdate(id,unlikes)}>
                    {unlikes}
                </div>
            </div>
        </div>
    );
}
