import React from 'react';

import {Button,Toast} from 'antd-mobile';
function showToast(){
  Toast.info('this is a toast tips!!')
}
function App() {
  return (
    <div className="App">
   
      <Button onClick={showToast}>default</Button>
    </div>
  );
}

export default App;
