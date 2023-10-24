import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function UnostSvetlya(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0) 

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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Hm      D{'\n'}</Text>
                 Юность светлая, весна ранняя –{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em      A      D{'\n'}</Text>
                  Мы ее Творцу принесем,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G      Em{'\n'}</Text>
                  Молодые мы в золотые дни{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Hm      F#      Hm{'\n'}</Text>
                  Лишь для Господа живем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Тьма неверия окружает нас,{'\n'}
                  Туча черная впереди,{'\n'}
                  Мы Христа огни в эти злые дни{'\n'}
                  Расставляем на пути.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Хоть и труден путь и тернистый он,{'\n'}
                  Со Христом его мы пройдем.{'\n'}
                  Молодые мы в золотые дни{'\n'}
                  Лишь для Господа живем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  О не бойся, друг, не смущайся, брат,{'\n'}
                  Проходя свой жизненный путь!{'\n'}
                  Впереди тебя твой Христос прошел{'\n'}
                  И тебя идти зовет.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 5: {'\n'}</Text>
                  Так спеши же, друг, посвятить Христу{'\n'}
                  Утро юности, жизни дни,{'\n'}
                  И Он даст тебе золотой венец,{'\n'}
                  Будешь царствовать ты с Ним.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
