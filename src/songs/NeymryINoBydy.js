import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function NeymryINoBydy({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em    C     G     D {'\n'}</Text>
                  Не умру я, но буду жить истиной Твоей! {'\n'}
                  В тесноте я воззвал, Он услышал меня.{'\n'}
                  Окружили и сильно толкнули меня,{'\n'}
                  Но Господь поддержал, Он защита моя!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  Вот, Кому принадлежит вся жизнь моя, {'\n'}
                  Агнец Божий взял мой грех, дал распять Себя!{'\n'}
                  Вот, кому принадлежит вся жизнь моя,{'\n'}
                  С каждой раны Твоей крик - "Люблю тебя!"{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Ты мой Бог, и я буду вечно славить Тебя! {'\n'}
                  Ты - Тот Камень, который отвергли зря. {'\n'}
                  На Тебя уповать, лучше, чем на людей.{'\n'}
                  Благ и милостив Ты во всей жизни моей!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Сколько в жизни дорог я прошел не туда,{'\n'}
                  Сколько жизненных сил отняла суета.{'\n'}
                  Сколько раз - я не мог убежать от греха.{'\n'}
                  Но Господь меня спас - Он спасения скала!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Мой Господь - моя сила, спасение моё,{'\n'}
                  Отвори врата правды - и к Тебе я войду.{'\n'}
                  Гласом радости буду славить имя Твоё,{'\n'}
                  Поспеши же ко мне - и Тебя я найду!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
