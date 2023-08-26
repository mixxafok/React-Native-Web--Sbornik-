import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function MiNygniDrygDrygy({navigation}) {
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={styles.Song} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={styles.Accordes}>F   C   Dm{'\n'}</Text>
                  Мы нужны друг другу, Бог нас спас не зря,{'\n'}
                  <Text style={styles.Accordes}>Bb   C   F   C{'\n'}</Text>
                  Чтобы с тобою были мы друзья.{'\n'}
                  <Text style={styles.Accordes}>F   C   Dm{'\n'}</Text>               
                  Так давай служить теперь ты мне, а я тебе,{'\n'}
                  <Text style={styles.Accordes}>Bb   C   F{'\n'}</Text>
                  Чтоб Царство Божье было на земле.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Bb   C   Am   Dm{'\n'}</Text>
                  Мы – одна семья, мы – одна семья,{'\n'}
                  <Text style={styles.Accordes}>Bb   C   F{'\n'}</Text>
                  Пролилась за нас Иисуса кровь.{'\n'}
                  <Text style={styles.Accordes}>Bb   C   Am   Dm{'\n'}</Text>
                  Мы теперь друзья, мы теперь друзья,{'\n'}
                  <Text style={styles.Accordes}>Bb   C   F{'\n'}</Text>
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
