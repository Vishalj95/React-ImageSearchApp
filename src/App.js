import React, { Component } from 'react';
import muiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import ImageResults from './components/imageresult/ImageResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Search />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
