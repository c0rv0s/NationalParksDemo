import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ParkModal from './ParkModal'

var request = require('request')

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function Parks() {
  const[parks, setParks] = useState([])

  const getParks = ()  => {
    let options = {
      method: 'GET',
      uri: 'https://sheltered-brook-11886.herokuapp.com/https://prm-interview.s3.amazonaws.com/parks.json'
    }
    request(options, function(error, response, body) {
      if (!error && response.statusCode === 200) {        
        setParks(JSON.parse(body))
      }
      else console.log(error)
    });  

  }
  useEffect(() => {
    getParks()
  },[])

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList} cols={3}>
            {parks.map((tile, key) => (
                <GridListTile key={key} cols={tile.cols || 1}>
                    <ParkModal tile ={tile} />
                </GridListTile>
            ))}
        </GridList>
    </div>    
  );
}
