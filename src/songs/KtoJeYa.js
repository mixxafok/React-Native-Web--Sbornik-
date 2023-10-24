import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function KtoJeYa(  ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H           H/A#           G#m {'\n'}</Text>
                  Кто же я, что Царя Вселенной всей {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E     F#          E     F#{'\n'}</Text>
                  Волнует боль моя и мир в душе моей? {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H           H/A#           G#m {'\n'}</Text>
                  Кто же я, что чудесный Божий свет {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E     F#          E     F#{'\n'}</Text>
                  Ведет меня всегда, когда мира в сердце нет? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E           F#          G#m            F#/A# {'\n'}</Text>
                  Не за то, что сделал я, но по милости Твоей. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G#m            F#/A#          E           F# {'\n'}</Text>
                  Не за все мои дела Ты любовь даруешь мне. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H           H/A#           G#m {'\n'}</Text>
                  Я - лишь цветок, что расцветает {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E {'\n'}</Text>
                  И мгновенно увядает. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E           F# {'\n'}</Text>
                  Пришел в мир и исчезну, как утренний туман. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H           H/A#           G#m {'\n'}</Text>
                  Но Ты мольбам моим внимаешь. {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E {'\n'}</Text>
                  Если упаду, прощаешь.  {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F#          E           H     E    G#m    F#{'\n'}</Text>
                  Ты сказал мне, что я  Твой, навсегда, навсегда. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Кто же я, что Всевидящий Господь,  {'\n'}
                  Простив мои грехи, дарует мне любовь? {'\n'}
                  Кто же я, чтобы Бог, смиривший шторм, {'\n'}
                  Дарил мне Свой покой, когда вокруг лишь зло?{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
