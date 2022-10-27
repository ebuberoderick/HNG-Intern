import './App.css';
import './remixicon/fonts/remixicon.css'
import slackImg from './images/slack.png'
import zuriImg from './images/Zuri.Internship_Logo.png'
import profileImg from "./images/profile__img.png";
import ingressiveImg from './images/I4G.png'
import Mylink from './components/linkButton';
import React from 'react'

function App() {
  const arrayLink = [
    {
      'displayName':'Twitter Link',
      'linkName':'https://twitter.com/ebube_roderick',
      'id': ''
    },{
      'displayName':'Zuri Team',
      'linkName':'https://training.zuri.team/',
      'id': 'btn__zuri'
    },{
      'displayName':'Zuri Books',
      'linkName':'http://books.zuri.team',
      'id': ''
    },{
      'displayName':'Python Books',
      'linkName':'http://books.zuri.team/python-for-beginners?ref_id=bube',
      'id': 'book__python'
    },{
      'displayName':'Background Check For Coders',
      'linkName':'https://background.zuri.team',
      'id': 'pitch'
    },{
      'displayName':'Design Books',
      'linkName':'https://books.zuri.team/design-rules',
      'id': 'book__design'
    },
  ]
  return (
    <div className="p-3 divide-y">
      <div className="max-w-6xl mx-auto space-y-8 py-8 relative">
        <div className="absolute h-12 w-12 rounded-full border cursor-pointer flex items-center justify-center right-0 md:right-36 top-16">
          <i className="ri-reply-line hidden md:block"></i>
          <i className="ri-more-line md:hidden"></i>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="h-32 relative w-32 bg-red-400 rounded-full">
            <img src={profileImg} alt="" id='profile_img' className="w-full h-full" draggable="false" />
          </div>
          <div className="font-bold ">Roderick Ebube</div>
          <div className="hidden" id="slack">bube</div>
        </div>
        <div className="space-y-4">
          {
            arrayLink.map((links) => (
              <Mylink displayName={links.displayName} linkName={links.linkName}></Mylink>
            ))
          }
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <img src={slackImg} alt="" className="w-8" />
          <i className="ri-github-fill text-4xl"></i>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-4 space-y-4 md:flex items-center">
        <div>
          <img src={zuriImg} alt="" />
        </div>
        <div className="flex-grow md:text-center text-gray-400">HNG Internship 9 Frontend Task</div>
        <div>
          <img src={ingressiveImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App;
