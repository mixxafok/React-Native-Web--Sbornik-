import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';


export default function NashaJizniThisGod() {

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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> Cm                                       G             Cm{'\n'}</Text>
                  Наша жизнь – это Бог, наша радость в Иисусе,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> Cm                                                G {'\n'}</Text>
                  Наше счастье лишь в Нём, только в Нём,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>           G#               D#        Fm          Cm {'\n'}</Text>               
                  ||:В неразрывном, едином, семейном союзе {'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>                            G#         G           Cm{'\n'}</Text>
                  За Христом мы пойдём, пойдём, пойдём.:||{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Он - наш Царь, наш Отец, наш Хранитель Он верный,{'\n'}
                  Лучший Друг в пору горя и слёз.{'\n'}
                  ||:В Нём любовь неизменна, ей нет окончанья,{'\n'}
                  Глубже моря она, ярче солнца и звёзд.:||{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Иисус – вот наш Вождь, чрез рассветы, закаты,{'\n'}
                  Чрез всю жизнь Имя то пронесём,.{'\n'}
                  ||:Иисуса Того, Кто за нас был распят, {'\n'}
                  По следам мы Его пойдём, пойдём.:||{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  И ни жизнь, и нии смерть, даже земные волненья,{'\n'}
                  И ничто Имя то не сотрёт,{'\n'}
                  ||:Оно Кровью святою записано в сердце,{'\n'}
                  И оно там живёт, растёт, цветёт.:||{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           <StatusBar/>
 
     </View>
   );
     
 }
