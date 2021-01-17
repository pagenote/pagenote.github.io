import './index.scss'
export default function ({children,className}){
  return(
    <div className={`common-header ${className}`}>
      {children}
    </div>
  )
}
