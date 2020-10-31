import React from 'react'
import './pageitem.scss'
export default function PageItem({page,onSelect,group,active}) {
    const steps = page.steps || [];
    const images = page.images || [];
    return(
        <div key={page.url} title={page.url} className={`page-item ${active?'active':''}`} onClick={()=>onSelect(page,group)} style={{backgroundImage:`url(${images[0]})`}}>
            <svg t="1593351193751" className="selected-icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2250" width="32" height="32">
                <path
                    d="M1024 1024V158.398C1024 70.86 953.14 0 865.602 0H0l1024 1024zM905.942 171.278L643.313 479.621s-19.084 26.63-45.714 0L483.425 327.394s-15.194-19.084 3.773-34.286c7.656-3.771 19.084-11.429 34.286 3.773l102.746 79.883 251.31-232.116s15.201-15.194 30.401-3.766c7.658 3.766 11.429 15.195 0.001 30.396z m0 285.524"
                    p-id="2251" fill="#1296db"></path>
            </svg>
            {/*<svg t="1594012219077" className="icon" viewBox="0 0 1024 1024" version="1.1"*/}
            {/*     xmlns="http://www.w3.org/2000/svg" p-id="2189" width="16" height="16">*/}
            {/*    <path*/}
            {/*        d="M722.2 85.5L939 300.3c24.3 21.2 26.9 58.1 5.7 82.4-21.2 24.3-58.1 26.9-82.4 5.7-2-1.8-3.9-3.7-5.7-5.7L834 365.5 613.4 678.3l69.3 69.3c20.3 25 16.5 61.8-8.6 82.1-21.5 17.5-52.4 17.4-73.8-0.2L192.8 418.7c-21.2-24.3-18.6-61.2 5.7-82.4 22-19.1 54.7-19.1 76.7 0l67.9 69.3 313-220.9L640 168c-24.3-21.2-26.9-58.1-5.7-82.4 21.2-24.3 58.1-26.9 82.4-5.7 2 1.8 3.9 3.7 5.7 5.7l-0.2-0.1z m-327.3 622l-81.3-80.4C248 706.3 144.3 821.5 125.5 845.5 98.2 879.3 77.1 917.6 63 958.7c41.1-13.9 79.4-34.9 113.2-62 24-18.8 139.2-122.5 218-189.2h0.7z"*/}
            {/*        p-id="2190" fill="#1296db"></path>*/}
            {/*</svg>*/}
            <div className='page-header'>
                <div className='page-title' title={page.url}>
                    <img className='page-icon' src={page.icon||images[0]} alt=""/>
                    {page.title || page.url}
                </div>
                <div className='page-link'>
                    <a className='link' title={page.title} target='_blank' href={page.url}>
                        <svg t="1593166539475" className="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="5602" width="14" height="14">
                            <path
                                d="M638.976 394.56c-7.744-7.808-16.128-14.848-24.704-21.44-8.896-8.576-20.928-13.824-34.304-13.824-27.2 0-49.28 22.144-49.28 49.344 0 12.032 4.288 23.04 11.52 31.616 3.456 4.16 7.552 7.744 12.16 10.56 4.672 3.84 9.28 7.616 13.504 11.904l4.032 4.032c51.136 51.072 35.904 139.072-15.232 190.144L338.56 875.008c-51.072 51.072-134.208 51.072-185.344 0l-4.096-4.16c-51.136-51.136-51.136-134.336 0-185.28l96.384-96.384c12.352-9.792 20.288-24.96 20.288-41.984 0-29.568-24-53.568-53.568-53.568-11.2 0-21.568 3.456-30.144 9.28 0 0 0-0.064-0.064-0.128l-1.024 0.96c-3.776 2.752-7.232 5.952-10.24 9.6L70.656 606.976c-94.144 94.208-94.144 248.32 0 342.4l4.096 4.032c94.144 94.08 248.128 94.08 342.272 0l218.112-218.112c94.016-94.208 101.952-242.688 7.936-336.768l-4.096-3.968zM953.344 74.688l-3.968-4.032c-94.208-94.208-248.192-94.208-342.4 0L388.992 288.768c-94.208 94.08-99.392 230.08-5.248 324.288l3.968 3.968c4.288 4.224 8.704 8.32 13.248 12.16 3.264 3.648 7.168 6.72 11.456 9.28 0 0.064 0.064 0.064 0.064 0.064 6.848 3.968 14.72 6.208 23.168 6.208 25.728 0 46.592-20.864 46.592-46.592 0-7.232-1.664-14.144-4.608-20.224-6.144-13.888-17.664-22.272-25.664-30.208L448 543.744c-51.072-51.136-31.68-125.44 19.456-176.576l218.24-218.048c51.008-51.136 134.144-51.136 185.28 0l4.032 3.968c51.136 51.136 51.136 134.336 0 185.344l-96.128 96.192c-12.992 9.664-21.504 25.28-21.504 42.752 0 29.312 23.744 53.12 53.12 53.12 10.24 0 19.776-2.88 27.904-7.872 0 0.128 0.064 0.192 0.128 0.32L840 521.6c4.608-3.072 8.64-6.848 12.096-11.2l101.248-93.376c94.208-94.208 94.208-248.192 0-342.336z m0 0"
                                p-id="5603" fill="#1296db"></path>
                        </svg>
                        {/*{page.url}*/}
                    </a>
                </div>
            </div>
            <div className='page-cliper'></div>
            <div className='page-lights'>
                {
                    steps.slice(0,3).map((step,index)=>(
                        <div key={step[6]+index} title={(step[3]||step[4]||'')} className='page-light' style={{borderColor: step[5]}}>
                            {(step[3]||step[4]||'').substr(0,50)}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
