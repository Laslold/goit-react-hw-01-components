import user from '../shared/user.json';
import Profile from './Profile/Profile';
import friends from '../shared/friends.json';
import FriendList from './FriendList';
import data from '../shared/data.json';
import Statistics from './Statistics';
import transactions from '../shared/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
