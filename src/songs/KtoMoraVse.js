import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function KtoMoraVse(  ) {
  
  const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                    Em{'\n'}</Text>
                  Кто моря все горстью исчерпал?  {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                    Em{'\n'}</Text>
                  Кто песок земли пересчитал? {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                    Em{'\n'}</Text>
                  Кто Один над всем имеет власть?  {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C                    Em                    G{'\n'}</Text>
                  Кто творенью радость может дать? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C     G/H    Am            F{'\n'}</Text>
                  Вот наш Бог, Трон Его высок, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C      G{'\n'}</Text>
                  Будем поклоняться!{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C     G/H    Am            F{'\n'}</Text>
                  Вот наш Царь, несравним ни с чем, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C      G{'\n'}</Text>
                  Будем поклоняться! {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Кто дает народам Свой устав? {'\n'}
                  Кто Единый прав во всех делах? {'\n'}
                  Кто решает что произойдет? {'\n'}
                  Кто Один все знает наперед? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Кто был свят, но взял вину людей? {'\n'}
                  Кто подставил руки для гвоздей? {'\n'}
                  Кто в смиреньи умер на кресте? {'\n'}
                  Кто воскрес, чтоб грешников спасти? {'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
