import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import WebPage from '@/pages/me/me/page/WebPage'
import CommonPage from "@/pages/CommonPage";
import './index.scss'

function NoteInPage(){
  return(
    <div className='webpage'>
      <Router>
        <Switch>
          <Route path="/:url">
            <PageWrapper />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

CommonPage(NoteInPage,false,false)

function PageWrapper(){
  const params = useParams();
  const url = decodeURIComponent(params.url);
  const urls = url.split(',')
  return <WebPage keys={urls} mode='page' />
}
