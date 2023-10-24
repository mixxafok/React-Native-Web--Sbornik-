import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function KakHorosho(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
    const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am          C{'\n'}</Text>
                  Как хорошо, что со мною Спаситель,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Gm          Dm          Am/E{'\n'}</Text>
                  Вечный Творец, Он так любит меня! {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am          Dm{'\n'}</Text>
                  В жизни моей Он - мой Друг и Хранитель, {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am          E           Am/E{'\n'}</Text>
                  Всюду со мной, среди ночи и дня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Где бы ни шла моей жизни дорога.  {'\n'}
                  Буду я жить для Иисуса Христа,  {'\n'}
                  Мне не страшна никакая тревога. {'\n'}
                  Верю Ему, в Нем любви полнота.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Путь наш суров, устаем временами. {'\n'}
                  Движемся мы по житейским волнам. {'\n'}
                  Скоро придет наш Спаситель за нами,  {'\n'}
                  Будет конец нашим бедам, скорбям.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
