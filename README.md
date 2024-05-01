# Getting Started with Create React App

- getListMoviesTrendingAsync.pending --> actionCreator

  - ![alt text](image-1.png)

- getListMoviesTrendingAsync.pending() --> action

  - ![alt text](image.png)

- actions dispatched by thunk

  - logging ![alt text](image-3.png)
  - console ![alt text](image-2.png)

- extraReducers addCase

  - ![alt text](image-4.png)
  - extraReducers : `ActionReducerMap`

- return new object in selector is cause Component always re-render every action is dispatched
  ![alt text](image-5.png)
- return all state in selector is almost always a mistake, Component will re-render whenever anything in state changes.
  ![alt text](image-6.png)

- thunk function
  ![alt text](image-7.png)

- thunk action creator
  ![alt text](image-8.png)
