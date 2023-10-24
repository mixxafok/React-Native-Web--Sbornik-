import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function PytKGolgofe(  ) {
  
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
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am                                C{'\n'}</Text>
                  Путь к Голгофе далёк, кровь стекала из ран,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm       E         Am{'\n'}</Text>
                  Сколько мук и страданий во взоре…{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am                   C{'\n'}</Text>
                  Иисус дорогой умирал на кресте,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm         E            Am{'\n'}</Text>
                  Принял тяжкие муки и горе.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F       G     Em            Am{'\n'}</Text>
                  Никогда не смогу я забыть этот крест,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm       E           Am{'\n'}</Text>
                  Он стоит между небом, землею.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F             G         Em           Am{'\n'}</Text>
                  Своей смертью Христос примирил нас с Творцом,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Dm        E       Am{'\n'}</Text>
                  Искупил драгоценною кровью.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  О, внемли, человек, гласу песни моей,{'\n'}
                  Что ты медлишь, мой друг, что ты ждешь?{'\n'}
                  Чем ты платишь Ему за божественный дар,{'\n'}
                  За пролитую кровь что даешь?{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Даль земли, свет зари, благо дней впереди –{'\n'}
                  Для тебя это создал Господь.{'\n'}
                  Он зовет: «О, приди!» — мимо, друг, не пройди,{'\n'}
                  В Нем ты счастье, покой обретешь.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Дай, Господь, мне понять тайну вечной любви,{'\n'}
                  Той, что Ты нам на землю принес.{'\n'}
                  И тогда я спокойно и твердо пойду{'\n'}
                  По земле среди бурь, среди гроз.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
