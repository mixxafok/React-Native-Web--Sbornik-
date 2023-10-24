import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function HristianinNesiOgon(  ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am                                                 Dm{'\n'}</Text>
                  Христианин, неси огонь чудесный свой,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                 E7                          Am{'\n'}</Text>
                  Который дал тебе Христос.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                                                        Dm {'\n'}</Text>               
                  Он умер на кресте, пожертвовав Собой.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>           E7                                 Am{'\n'}</Text>
                  Огонь любви Он всем принес.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>            E7                      Am{'\n'}</Text>
                  Гори огонь, всегда гори!{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                                                        Dm{'\n'}</Text>
                  Воспламеняй собой холодные сердца{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                G                                 C{'\n'}</Text>
                  И новый мир прекрасный озари,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>   Am                      E               Am{'\n'}</Text>
                  В котором радость без конца.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Вот - путник, он устал, он изнемог в пути,{'\n'}
                  Согрей его и ободри,{'\n'}
                  Скажи, что не покинет его вечный Бог,{'\n'}
                  Засветит солнце впереди.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  А если путник вдруг свернет с того пути,{'\n'}
                  Который к радости ведет.{'\n'}
                  То ты в его груди огонь любви зажги,{'\n'}
                  Чтобы он смог тот путь найти.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  И если станет очень тяжело тебе,{'\n'}
                  Суровый мир сдует огонь,{'\n'}
                  Не унывай, ведь любящий Господь с тобой,{'\n'}
                  Он сохранить светильник твой.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           

     </View>
   );
     
 }
