import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function TiMenyaNapolni(  ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues')) 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>

        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E    H    A    H{'\n'}</Text>
                  Ты меня наполни святостью Твоей,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E    H    A{'\n'}</Text>
                  Пусть меня исполнит Дух Твой как елей.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H    C#m    A    E{'\n'}</Text>
                  Я всего лишь человек, словно пыль перед Тобой,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>A    H    E{'\n'}</Text>
                  Но в Твоих руках я нахожу покой.{'\n'}
                  Ты всегда был рядом, когда я страдал,{'\n'}
                  Посылал надежду, веру укреплял.{'\n'}
                  И нет слов, чтоб описать полноту любви Твоей,{'\n'}
                  Как прекрасен Ты Господь души моей.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E    A{'\n'}</Text>
                  Ты скажи мне Боже кто я есть{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H    E{'\n'}</Text>
                  По сравнению с Тобой,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>E    A{'\n'}</Text>
                  Ты светящий , яркий солнца свет{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H    E{'\n'}</Text>
                  Можешь скрыть своей рукой,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C#m    A{'\n'}</Text>
                  И сиянье неба и дождя {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H    E{'\n'}</Text>
                  И росток в сухой земле{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>C#m    A{'\n'}</Text>
                  Мне ответят снова, что нигде{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>H    E{'\n'}</Text>
                  Нет подобного Тебе!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Я нашёл свободу став Твоим рабом,{'\n'}
                  Я обрёл спасенье став Твоим детём{'\n'}
                  Мои сердце и любовь я кладу к ногам Твоим,{'\n'}
                  Только Ты достоин славы и хвалы!{'\n'}
                  Твоё Имя велико по всей земле,{'\n'}
                  Твоя слава не смолкает в вышине.{'\n'}
                  Пусть ещё одна душа вдруг увидит и поймёт,{'\n'}
                  Что её Создатель в небесах живёт.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
