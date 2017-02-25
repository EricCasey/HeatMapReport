import React from 'react';
import logo from './logo.svg';
import './App.css';
import Datamap from 'datamaps'

const App = React.createClass({
  getInitialState: function () {
    return {
      something: ''
    };
  },

  GenMap: function () {
    var ctrMap = new Datamap({
      scope: 'usa',
      element: document.getElementById('map_election'),
      geographyConfig: {
        highlightBorderColor: '#A9C0DE',
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name + ' - CTR: ' +  data.CTR + '</div>'
        },
        highlightBorderWidth: 2
      },
      fills: {
      'I': '#DAF7A6',
      'II': '#FFC300',
      'III': '#FF5733',
      'IV': '#C70039',
      'V': '#900C3F',
      'VI': '#581845',
      defaultFill: '#EDDC4E'
    },
    data:{
      "SC": {
         "CTR": 0.567,
         "fillKey": "III"
      },
      "OR": {
         "CTR": 0.174,
         "fillKey": "II"
      },
      "RI": {
         "CTR": 0.037,
         "fillKey": "I"
      },
      "NY": {
         "CTR": 0.293,
         "fillKey": "II"
      },
      "VT": {
         "CTR": 0.188,
         "fillKey": "II"
      },
      "CO": {
         "CTR": 0.383,
         "fillKey": "III"
      },
      "OH": {
         "CTR": 0.298,
         "fillKey": "II"
      },
      "OK": {
         "CTR": 0.404,
         "fillKey": "III"
      },
      "KY": {
         "CTR": 0.364,
         "fillKey": "III"
      },
      "MA": {
         "CTR": 0.268,
         "fillKey": "II"
      },
      "MI": {
         "CTR": 0.411,
         "fillKey": "III"
      },
      "AK": {
         "CTR": 0.025,
         "fillKey": "I"
      },
      "AL": {
         "CTR": 1.078,
         "fillKey": "VI"
      },
      "GA": {
         "CTR": 0.259,
         "fillKey": "II"
      },
      "NJ": {
         "CTR": 0.16,
         "fillKey": "II"
      },
      "IN": {
         "CTR": 0.25,
         "fillKey": "II"
      },
      "MT": {
         "CTR": 0.237,
         "fillKey": "II"
      },
      "WY": {
         "CTR": 0.183,
         "fillKey": "II"
      },
      "VA": {
         "CTR": 0.417,
         "fillKey": "III"
      },
      "ID": {
         "CTR": 0.182,
         "fillKey": "II"
      },
      "PA": {
         "CTR": 0.466,
         "fillKey": "III"
      },
      "DC": {
         "CTR": 0.196,
         "fillKey": "II"
      },
      "ME": {
         "CTR": 0.201,
         "fillKey": "II"
      },
      "IA": {
         "CTR": 0.158,
         "fillKey": "II"
      },
      "WI": {
         "CTR": 0.164,
         "fillKey": "II"
      },
      "CA": {
         "CTR": 0.277,
         "fillKey": "II"
      },
      "KS": {
         "CTR": 0.114,
         "fillKey": "I"
      },
      "WA": {
         "CTR": 0.147,
         "fillKey": "II"
      },
      "CT": {
         "CTR": 0.142,
         "fillKey": "II"
      },
      "NM": {
         "CTR": 0.897,
         "fillKey": "V"
      },
      "MD": {
         "CTR": 0.417,
         "fillKey": "III"
      },
      "NE": {
         "CTR": 0.127,
         "fillKey": "II"
      },
      "IL": {
         "CTR": 0.287,
         "fillKey": "II"
      },
      "DE": {
         "CTR": 0.074,
         "fillKey": "I"
      },
      "NC": {
         "CTR": 0.452,
         "fillKey": "III"
      },
      "AZ": {
         "CTR": 1.192,
         "fillKey": "VI"
      },
      "UT": {
         "CTR": 0.72,
         "fillKey": "IV"
      },
      "TX": {
         "CTR": 0.34,
         "fillKey": "II"
      },
      "SD": {
         "CTR": 0.06,
         "fillKey": "I"
      },
      "MN": {
         "CTR": 0.349,
         "fillKey": "II"
      },
      "AR": {
         "CTR": 0.247,
         "fillKey": "II"
      },
      "ND": {
         "CTR": 0.069,
         "fillKey": "I"
      },
      "LA": {
         "CTR": 0.41,
         "fillKey": "III"
      },
      "WV": {
         "CTR": 0.175,
         "fillKey": "II"
      },
      "MS": {
         "CTR": 0.252,
         "fillKey": "II"
      },
      "?": {
         "CTR": 0.549,
         "fillKey": "III"
      },
      "HI": {
         "CTR": 0.258,
         "fillKey": "II"
      },
      "FL": {
         "CTR": 0.556,
         "fillKey": "III"
      },
      "NH": {
         "CTR": 0.197,
         "fillKey": "II"
      },
      "TN": {
         "CTR": 0.511,
         "fillKey": "III"
      },
      "NV": {
         "CTR": 0.717,
         "fillKey": "IV"
      }
    }
    });
    ctrMap.labels();
  },

  toggleGrabbed: function () {},

  render: function () {
    return (
      <div className='App'>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to your CTR heatmap</h2>
        </div>
        <section>
          Book Release Campaign Spring 2017
          <div onClick={this.GenMap()}></div>
        </section>
      </div>
    );
  },
});

export default App;
