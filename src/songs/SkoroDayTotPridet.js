import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function SkoroDayTotPridet(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true); 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>

        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G          Н{'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am         D         G         G7{'\n'}</Text>
                  Ни печали невзгод, ни нужды, ни тревог. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C         Cm         G         Em{'\n'}</Text>
                  Мир царит в стране святой, тьмы не будет никакой. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am         D         G         G7{'\n'}</Text>
                  Что за день, радостный день будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>С         Сm         G         E{'\n'}</Text>
                  Что за день будет там, когда встречу я Христа! {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>A         D         G         G7{'\n'}</Text>
                  Он возьмет меня с Собой в край небесный, не земной. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C         Cm         G         Em{'\n'}</Text>
                  Руку даст Он мне Свою, и я с Ним туда пойду. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am         D         G{'\n'}</Text>
                  Что за день, радостный день будет там! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Там не будет забот, Мир и радость не пройдет. {'\n'}
                  Ни болезнь, ни слеза, Радость будет без конца. {'\n'}
                  Буду вечно я тогда Прославлять Царя Христа. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Скоро день тот придет, и не будет всех забот, {'\n'}
                  Ни печали невзгод, Ни нужды, ни тревог. {'\n'}
                  Мир царит в стране святой, Тьмы не будет никакой. {'\n'}
                  Что за день, радостный день Будет там!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
