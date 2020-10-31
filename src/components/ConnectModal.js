import './connect-modal.scss'

export default function ConnectModal({status='connecting'}) {
  return <div className='connect-modal'>
    <div className='modal-content'>
      正在连接中
    </div>
  </div>
}
