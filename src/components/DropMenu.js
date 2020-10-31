import React,{useState,useEffect} from 'react'
import  style from '../styles/dropmenu.module.scss'

export default function DropMeun({list,selected,onSelect}) {
    const selectedItem = list.find((item)=>{return item.value === selected});
    const [hasSelected, setHas] = useState(false);
    const doSelect = function (value) {
        onSelect(value);
        setHas(true)

    };
    useEffect(() => {
        setTimeout(()=>setHas(false),10)
    });
    return(
        <div className={style.menu}>
            <div>
                {selectedItem.label}
                <svg t="1593227557427" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6571" width="14" height="14">
                    <path
                        d="M543.86419315 739.37652439c-12.01234468 12.01234468-28.31481246 23.16666475-43.75925565 19.73456629-15.44444316 2.57407386-30.03086171-9.43827083-42.0432064-19.7345663L86.53707047 366.13581452c-18.87654164-18.87654164-18.87654164-49.76542799 0-68.64196959s49.76542799-18.87654164 68.64196963 0l345.78392203 355.22219283L847.60490875 297.49384493c18.87654164-18.87654164 49.76542799-18.87654164 68.64196962-1e-8s18.87654164 49.76542799-1e-8 68.6419696l-372.38268521 373.24070987z"
                         p-id="6572"></path>
                </svg>
            </div>
            <div className={`${style.listModal} ${hasSelected?style.hide:''}`}>
                {
                    list.map((item)=>(
                        <div key={item.value}
                             className={`${style.listItem} ${item.value===selected?style.selected:''}`}
                             onClick={()=>doSelect(item.value)}>
                            {item.label}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
