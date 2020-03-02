import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

// "/about" 요청시 두개의 컴포넌트가 둘다 그려진다.
// 이를위해 Home을 위한 Route 컴포넌트를 사용할 때 exact라는 props를 true로 설정해주어야 한다.
// exact={true}

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
