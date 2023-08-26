import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function TiIskupilMir({navigation}) {
  
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
                  <Text style={styles.Accordes}>G      D      Em{'\n'}</Text>
                  Ты искупил мир от греха,{'\n'}
                  <Text style={styles.Accordes}>Em     C{'\n'}</Text>
                  Ты дал ему любовь и свет,{'\n'}
                  <Text style={styles.Accordes}>C      Am{'\n'}</Text>
                  Зажёг потухшие сердца{'\n'}
                  <Text style={styles.Accordes}>Am     D{'\n'}</Text>
                  и дал надежду.{'\n'}
                  Мы пред Тобою предстоим {'\n'}
                  и каждый дорог для Тебя,{'\n'}
                  За всё, Отец, благодарим {'\n'}
                  и превозносим.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G     D{'\n'}</Text>
                  Слава Тебе и величье, {'\n'}
                  <Text style={styles.Accordes}>Em     D{'\n'}</Text>
                  слава в веках и народах,{'\n'}
                  <Text style={styles.Accordes}>C     G{'\n'}</Text>
                  Сила Твоя безгранична,{'\n'}
                  <Text style={styles.Accordes}>Am     D  (G){'\n'}</Text>
                  Милость Твоя во все роды.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Ты открываешь новый мир {'\n'}
                  Любви, надежды, чистоты.{'\n'}
                  С Тобой не трудно мне идти, {'\n'}
                  Ведь Ты со мною.{'\n'}
                  Твоя любовь меня хранит,{'\n'}
                  Дает мне силу и покой,{'\n'}
                  И потому сердца людей{'\n'}
                  Полны хвалой!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Христа увидеть цель моя,{'\n'}
                  Об этом лишь мечтаю я. {'\n'}
                  И через бури и дожди,{'\n'}
                  Иду на встречу. {'\n'}
                  Ты Бог Царей и Бог рабов,{'\n'}
                  Ты бедных и богатых Бог, {'\n'}
                  Ты Бог неведомых миров,{'\n'}
                  Тебя я славлю!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Я больше не во власти зла{'\n'}
                  И не служу чужим богам. {'\n'}
                  Твой Свет дорогу указал{'\n'}
                  И я свободен. {'\n'}
                  К престолу славы прихожу{'\n'}
                  И не стыжусь поднять глаза, {'\n'}
                  Иисус меня от смерти спас{'\n'}
                  И дал свободу{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
