import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function KtoMoraVse({navigation}) {
  
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
                  <Text style={styles.Accordes}>C                    Em{'\n'}</Text>
                  Кто моря все горстью исчерпал?  {'\n'}
                  <Text style={styles.Accordes}>C                    Em{'\n'}</Text>
                  Кто песок земли пересчитал? {'\n'}
                  <Text style={styles.Accordes}>C                    Em{'\n'}</Text>
                  Кто Один над всем имеет власть?  {'\n'}
                  <Text style={styles.Accordes}>C                    Em                    G{'\n'}</Text>
                  Кто творенью радость может дать? {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>C     G/H    Am            F{'\n'}</Text>
                  Вот наш Бог, Трон Его высок, {'\n'}
                  <Text style={styles.Accordes}>C      G{'\n'}</Text>
                  Будем поклоняться!{'\n'}
                  <Text style={styles.Accordes}>C     G/H    Am            F{'\n'}</Text>
                  Вот наш Царь, несравним ни с чем, {'\n'}
                  <Text style={styles.Accordes}>C      G{'\n'}</Text>
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
