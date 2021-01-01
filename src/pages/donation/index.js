import React, {Component} from 'react'
import CommonPage from "../CommonPage";
import './donation.scss'

const users = [
  {
    name:'**涛',
    amount: 10,
    type: 1,
    time:'2020-03-26'
  },
  {
    name:'**杰',
    amount: 6.6,
    type: 1,
    time:'2020-11-05'
  },
  {
    name:'Liu*un',
    amount: 5,
    type: 2,
    time:'2020-10-13'
  },
  {
    name:'a*e',
    amount: 10,
    type: 2,
    time:'2020-10-21'
  },
  {
    name:'-',
    amount: 15,
    type: 2,
    time:'2020-11-2'
  },
  {
    name:'顾*',
    amount: 15,
    type: 2,
    time:'2020-11-12'
  },
  {
    name:'我是**侠',
    amount: 10,
    type: 2,
    time:'2020-11-30'
  },
  {
    name:'***240',
    amount: 10,
    type: 2,
    time:'2020-12-2'
  },
  {
    name:'*叶',
    amount: 5,
    type: 2,
    time:'2020-12-2'
  },
  {
    name:'*檬',
    amount: 20,
    type: 2,
    time:'2020-12-3'
  },
  {
    name:'*浩',
    amount: 5,
    type: 1,
    time:'2020-12-10'
  },{
    name:'N*h',
    amount: 20,
    type: 2,
    time:'2020-12-17'
  },{
    name:'子*',
    amount: 10,
    type: 2,
    time:'2020-12-17'
  },{
    name:'aga*',
    amount: 25,
    type: 2,
    time:'2020-12-30'
  },{
    name:'白*',
    amount: 5,
    type: 2,
    time:'2021-01-01'
  },
];

const payType={
  1:'支付宝',
  2:'微信',
};

export default class CreatePage extends Component{

  render() {
    return (
      <div className='donation'>
        <p>
          <p>
            <span className='light-me green'>为 PAGENOTE 打赏鼓气，帮助发展更好，任意金额都是鼓励。</span>
          </p>
          <p>
            <img src="/dashang.jpg" alt="支持pagenote"/>
          </p>
          <p>
            如果未来 PAGENOTE 提供部分付费高级功能、版本，打赏用户将得到最大程度的优惠。
            <br/>
            <span className='light-me'>「你现在能使用的功能，在未来也将继续可以使用，不会因为没有付费而针对你停止服务」</span>
          </p>
        </p>
        <div className='donation-users'>
            <h4>感谢以下用户的支持：</h4>
            <div>
              <table>
                <thead>
                  <th>
                    用户
                  </th>
                  <th>支付方式</th>
                  <th>金额</th>
                  <th></th>
                </thead>
                <tbody>
                  {users.map((user)=>(
                    <tr key={user.name}>
                      <td>{user.name}</td>
                      <td>{payType[user.type]}</td>
                      <td>{user.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    )
  }
}

CommonPage(CreatePage);
