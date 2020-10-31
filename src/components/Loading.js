import  style from '../styles/loading.module.scss'
export default function Loading() {
    return(
        <div className={style.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}