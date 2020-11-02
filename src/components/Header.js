import React, {Component} from 'react';
import axios from "axios";
const proxy = 'https://cors-anywhere.herokuapp.com/';
const host = 'https://pagenote.logike.cn';
const loginUrl = `https://github.com/login/oauth/authorize?scope=user%20public_repo&client_id=c4aae381097464aa1024&redirect_uri=${host}`

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            userInfo:{},
        }
    }

    componentDidMount() {
        this.codeToToken();
        this.checkLogin();
    }

    codeToToken=()=> {
        const search = window.location.search;
        const code = search.match(/code=(.*)$/);
        if(!code){
            return;
        }
        axios({
            method: 'post',
            headers: {
                Accept: 'application/json'
            },
            url: `${proxy}https://github.com/login/oauth/access_token`,
            data: {
                client_id: 'c4aae381097464aa1024',
                client_secret: 'ed40211bca3ccabd900586079b89fd0ec1ea48be',
                code:code[1],
            }
        }).then( (response)=> {
            const token = response.data.access_token;
            localStorage.setItem('token',token);
            const a = new URLSearchParams(location.search);
            const redirect = a.get('comeback');
            if(redirect){
                window.location = redirect;
            }else {
                window.location = '/'
            }
        });
    };

    checkLogin =()=>{
        const token = localStorage.getItem('token');
        if(!token){
            return;
        }
        axios({
            method: 'get',
            headers: {
                Accept: 'application/json',
                Authorization: `token ${token}`
            },
            url: `${proxy}https://api.github.com/user`,
        }).then( (response)=> {
            if(response.data){
                this.setState({
                    userInfo: response.data
                })
            }
        }).catch((e)=>{
            console.error(e)
        });
    };

    render() {
        const { userInfo } = this.state;
        return <nav>
            <style jsx='true'>{`
                nav{
                    // height: 40px;
                    // line-height: 40px;
                    font-size:14px;
                    border-bottom: 1px solid rgba(30,35,42,.06);
                    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
                }
                nav a{
                    color: #0366d6;
                    text-decoration: none;
                    margin-right: 12px;
                }
                .header{
                    display: flex;
                    padding: 0 24px;
                    padding: 10px 24px;
                    margin: 0 auto;
                    max-width: 1200px;
                    justify-content: space-between;
                    box-sizing: border-box;
                }
                .me-link{
                    margin-right: 12px;
                }
                .user-avatar{
                    width: 20px;
                    height: 20px;
                    border-radius: 10px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                #login{
                    padding: 0px 6px;
                    background: #509ff5;
                    border-radius: 6px;
                    color: #fff;
                }
            `}

            </style>
            <section className="header">
                <div>
                    <a href="/">PAGENOTE 一页一记</a>
                </div>
                <div>
                    <span className='me-link'>
                        {
                            userInfo.name ?
                                <a className='user-avatar' href='/me'>
                                    <img width={20} height={20} src={`${userInfo.avatar_url}&s=30`} alt={`${userInfo.name}`}/>
                                </a> :
                                <a id="login"
                                   href='/me'>我的</a>
                        }
                    </span>
                    <a href="/setting">设置</a>
                    {/*<a href="/new">新建</a>*/}
                </div>
            </section>
        </nav>;
    }
}
