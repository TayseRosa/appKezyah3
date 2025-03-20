import React, { useContext, useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';

import Header from '../../components/Header';

export default function Home(){
  const [listBalance, setListBalance] = useState([]);

  return(
    <Background>
      <Header title="Minhas movimentações" />


    </Background>
  )
}