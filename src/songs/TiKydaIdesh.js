import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function TiKydaIdesh(  ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> С{'\n'}</Text>
                  "Ты куда идешь, скажи мне,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F         G{'\n'}</Text>
                  Странник с посохом в руке?" -{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F         G{'\n'}</Text>
                  "Дивной милостью Господней{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C         G         C{'\n'}</Text>
                  К лучшей я иду стране.{'\n'}
                  
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F         G{'\n'}</Text>
                  // Через горы и долины,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C         A{'\n'}</Text>
                  Через степи и поля,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F         G{'\n'}</Text>
                  Чрез леса и чрез равнины{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C         G         C{'\n'}</Text>
                  Я иду домой, друзья". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  "Странник, в чем твоя надежда{'\n'}
                  В той стране твоей родной?" -{'\n'}
                  "Белоснежная одежда{'\n'}
                  И венец весь золотой.{'\n'}
                  // Там источники живые{'\n'}
                  И небесные цветы,{'\n'}
                  Я иду за Иисусом{'\n'}
                  Через жгучие пески". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  "Страх и ужас не знакомы{'\n'}
                  Разве на пути тебе?" - {'\n'}
                  "Да, но Божьи легионы{'\n'}
                  Охранят меня везде! {'\n'}
                   // Иисус Христос со мною,{'\n'}
                  Он направит Сам меня {'\n'}
                  Неуклонною тропою{'\n'}
                  Прямо, прямо в небеса". // 2р.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  "Так возьми ж меня с собою,{'\n'}
                  Где чудесная страна". -{'\n'}
                  "Да, мой друг, пойдем со мною,{'\n'}
                  Вот тебе моя рука!{'\n'}
                  // Недалеко уж родная{'\n'}
                  И желанная страна.{'\n'}
                  Вера чистая, живая{'\n'}
                  Нас введет с тобой туда. // 2р.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
