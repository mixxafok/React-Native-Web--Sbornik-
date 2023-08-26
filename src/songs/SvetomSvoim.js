import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function SvetomSvoim({navigation}) {
  
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
                  <Text style={styles.Accordes}>E         H         F#m        A{'\n'}</Text>
                  Светом Своим Ты прогнал сумрак ночи,{'\n'}
                  <Text style={styles.Accordes}>E         H         A{'\n'}</Text>
                  И мне глаза Ты открыл.{'\n'}
                  <Text style={styles.Accordes}>E         H        F#m         A{'\n'}</Text>
                  Всю свою жизнь я хочу быть с Тобою,{'\n'}
                  <Text style={styles.Accordes}>E         H         A{'\n'}</Text>
                  Надежду Ты подарил.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>E         H{'\n'}</Text>
                  Здесь я, чтобы славить, пред Тобой склониться{'\n'}
                  <Text style={styles.Accordes}>C#m         A{'\n'}</Text>
                  И сказать Тебе, что Ты - мой Бог.{'\n'}
                  <Text style={styles.Accordes}>E         H{'\n'}</Text>
                  Ты один достоин, кто с Тобой сравнится?{'\n'}
                  <Text style={styles.Accordes}>C#m         A{'\n'}</Text>
                  Кто так возлюбить меня бы смог?{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Царь всех царей, высоко вознесённый,{'\n'}
                  Прославленный в Небесах!{'\n'}
                  С Неба сошёл Ты, чтоб дать нам спасение,{'\n'}
                  Унижен Ты был ради нас.{'\n'}{'\n'}


              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
