import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function DoveryatTebe(  ) {
  
  const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 


   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>  navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab{'\n'}</Text>
                  Отпускаю все мечты мои,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm{'\n'}</Text>
                  Я полагаю их у ног Твоих {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Bbm{'\n'}</Text>               
                  Если в жизни ошибаюсь я, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db {'\n'}</Text>
                  Твоя любовь не изменяется {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Хотел сразиться я за жизнь мою...{'\n'}
                  Ослабли руки, устал я в бою{'\n'}
                  Ты сильный Воин, Ты Царь всех побед!{'\n'}
                  Я побеждаю, когда я в Тебе{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab                            Eb {'\n'}</Text>
                  И даже если горы не двигаясь стоят{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                           Db{'\n'}</Text>
                  И если воды моря не разделяются...{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Ab                              Eb {'\n'}</Text>
                  И если на молитвы, не вижу я ответ{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                         Db{'\n'}</Text>
                  Доверять, доверять буду я Тебе!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Что завтра мне принесёт опять?{'\n'}
                  Ты знаешь, всё известно для Тебя!{'\n'}
                  Живи во мне, будь дыханием моим{'\n'}
                  Дай каждый день ходить путём Твоим!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Мост: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db                                  Eb{'\n'}</Text>
                  Ты мой покой и сила, опора Ты моя!{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm{'\n'}</Text>
                  Моё Ты основание, Ты крепкая скала!{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Db                                 Eb {'\n'}</Text>               
                  Твои пути прекрасны, они превыше всех!{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Fm                                Eb/G {'\n'}</Text>
                  Ты держишь эту Землю и всё в Твоей руке!{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
