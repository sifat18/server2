import { useDispatch, useSelector } from 'react-redux';
import { pageChange } from '../../features/filter/filterSlice';
export default function Pagination() {
    const dispatch=useDispatch()
    const page= useSelector(state=>state.filter.page)
    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                <div className={`${page===1 ? `bg-blue-600`:`bg-blue-100`} text-white px-4 py-1 rounded-full`} onClick={()=>dispatch(pageChange(1))}>
                    1
                </div>
                <div className={`${page===2 ? `bg-blue-600`:`bg-blue-100`} text-white px-4 py-1 rounded-full`} onClick={()=>dispatch(pageChange(2))}>
                    2
                </div>
                <div className={`${page===3 ? `bg-blue-600`:`bg-blue-100`} text-white px-4 py-1 rounded-full`} onClick={()=>dispatch(pageChange(3))}>
                    3
                </div>
                <div className={`${page===4 ? `bg-blue-600`:`bg-blue-100`} text-white px-4 py-1 rounded-full`} onClick={()=>dispatch(pageChange(4))}>
                    4
                </div>
            </div>
        </section>
    );
}
