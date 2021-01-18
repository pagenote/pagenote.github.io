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
    name:'Again*',
    amount: 25,
    type: 2,
    time:'2020-12-30'
  },{
    name:'白*',
    amount: 5,
    type: 2,
    time:'2021-01-01'
  },{
    name:'Log*',
    amount: 5,
    type: 3,
    time:'2021-01-03'
  },{
    name:'Again*',
    amount: 25,
    type: 3,
    time:'2021-01-03'
  },{
    name:'Log*',
    amount: 5,
    type: 2,
    time:'2021-01-04'
  },{
    name:'Se*en',
    amount: 2.66,
    type: 2,
    time:'2021-01-08'
  },{
    name:'**军',
    amount: 20,
    type: 1,
    time:'2021-01-10'
  },{
    name:'永*恒',
    amount: 5,
    type: 2,
    time:'2021-01-15'
  },{
    name:'YW*Y',
    amount: 50,
    type: 2,
    time:'2021-01-16'
  },{
    name:'思*',
    amount: 25,
    type: 2,
    time:'2021-01-18'
  }
];

const payType={
  1:'支付宝',
  2:'微信',
  3: '文章打赏',
};

export default class CreatePage extends Component{

  render() {
    return (
      <div className='donation'>
        <p>
          <p>
            <span className='light-me green'>为 PAGENOTE 鼓气，每一次赞赏都会加速我们更好地发展。</span>
          </p>
          <p>
            如果未来 PAGENOTE 提供部分付费高级功能、版本，打赏用户将得到最大程度的优惠。
            <br/>
            <span className='light-me'>「你现在能使用的功能，在未来也将继续可以使用，不会因为没有付费而针对你停止服务」</span>
          </p>
          <p>
            <img src="/dashang.jpg" alt="支持pagenote"/>
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
