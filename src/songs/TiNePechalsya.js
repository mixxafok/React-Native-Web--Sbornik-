import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function TiNePechalsya(  ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     C     D     G{'\n'}</Text>
                  Я постигаю сквозь слезы и боль{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C     Am     B7     Em{'\n'}</Text>
                  Радость встречи и горечь разлуки.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     C     D     G{'\n'}</Text>
                  Пью эту чашу, где сладость и соль,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C     Am     B7     Em{'\n'}</Text>
                  Перемешались надежда и муки.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     Am     D     G{'\n'}</Text>
                  Ты не печалься, не беспокойся,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     Am     H7     Em{'\n'}</Text>
                  Если Бог с нами - чего бояться?{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     Am     D     G{'\n'}</Text>
                  Ты не печалься, не беспокойся,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Em     Am     H7     Em{'\n'}</Text>
                  Если Бог с нами.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Свободу ищу из железных оков, {'\n'}
                  Тех, что зовутся житейское счастье. {'\n'}
                  Вся моя жизнь - это несколько слов{'\n'}
                  В тихой молитве перед причастьем.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  И не жалея о прошлом ничуть,{'\n'}
                  Вижу как катится мир к катастрофе.{'\n'}
                  Верую в крестный мной избранный путь,{'\n'}
                  В тайну распятой любви на Голгофе.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
