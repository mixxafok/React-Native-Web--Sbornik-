import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function MiNygniDrygDrygy(  ) {
  
     const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F   C   Dm{'\n'}</Text>
                  Мы нужны друг другу, Бог нас спас не зря,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   F   C{'\n'}</Text>
                  Чтобы с тобою были мы друзья.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F   C   Dm{'\n'}</Text>               
                  Так давай служить теперь ты мне, а я тебе,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   F{'\n'}</Text>
                  Чтоб Царство Божье было на земле.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   Am   Dm{'\n'}</Text>
                  Мы – одна семья, мы – одна семья,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   F{'\n'}</Text>
                  Пролилась за нас Иисуса кровь.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   Am   Dm{'\n'}</Text>
                  Мы теперь друзья, мы теперь друзья,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bb   C   F{'\n'}</Text>
                  И в сердцах у нас Его любовь.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Пусть дружнее станет наш семейный круг,{'\n'}
                  С нами рядом самый лучший Друг!{'\n'}
                  И о Нём всем людям поспешим мы рассказать,{'\n'}
                  Чтоб каждый смог Иисусу другом стать!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
