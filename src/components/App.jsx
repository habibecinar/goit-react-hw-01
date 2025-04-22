import React  from 'react'
import './App.css'
import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import friends from '../data/friends.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json'


const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const App = () => {
  return (
  <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory  items={transactions}/>

    </div>
  );
};



export default App;
