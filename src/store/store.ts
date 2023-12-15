// store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // 假设你将在后面创建这个 reducer
 // 引入之前定义的类型



// 创建 store
const store = configureStore({
    reducer: rootReducer
  });
  

export default store;
