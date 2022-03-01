import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


// const HatsPage = () => {
//   return (
//     <div>
//       <Link to='topics'>Topics</Link>
//       <h1>HATE PAGE</h1>
//     </div>
//   )
// }

// const TopicsList = (props) => {
//   return (
//     <div>
//       <h1>Topics List PAGE</h1>
//       <Link to={`${props.match.url}/13`} >TO TOPICS 13</Link> 
//       <Link to={`${props.match.url}/17`} >TO TOPICS 17</Link> 
//       <Link to={`${props.match.url}/21`} >TO TOPICS 21</Link> 
//     </div>
//   )
// }

// const HomeP = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1>Home PAGE</h1>
//     </div>
//   )
// }

// const TopicsDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topics Detail PAGE: { props.match.params.topicId  }</h1>
//     </div>
//   )
// }

  
// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         {/* <Route exact path='/homepage' component={HomeP} />
//         <Route exact path='/topics' component={TopicsList} />
//         <Route path='/topics/:topicId' component={TopicsDetail} /> */}
//         <Route exact path='/shop' component={ShopPage} />
//         <Route path='/signin' component={SignInAndSignUp} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}



export default App;