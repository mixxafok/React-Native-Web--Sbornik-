import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function NaDalekomHolme({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am          Dm    E           Am{'\n'}</Text>
                  На далёком холме средь деревьев и скал,  {'\n'}
                  <Text style={styles.Accordes}>Dm    G           C     Am{'\n'}</Text>
                  Сквозь седые века, старый крест простоял.{'\n'}
                  <Text style={styles.Accordes}>Dm    E           Am{'\n'}</Text>
                  Миллионы людей у подножья креста  {'\n'}
                  <Text style={styles.Accordes}>F           E{'\n'}</Text>
                  Свое счастье нашли. Там однажды был я.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Dm          E           Am {'\n'}</Text>
                  Старый крест, старый крест, не броский, но лишь в нём{'\n'}
                  <Text style={styles.Accordes}>Dm          G           C           A7{'\n'}</Text>
                  Сила есть, сила есть. Сегодня может он{'\n'}
                  <Text style={styles.Accordes}>Dm          Am          F{'\n'}</Text>
                  Исцелять разбитые, больные сердца,{'\n'}
                  <Text style={styles.Accordes}>Dm          F           E           Am{'\n'}</Text>
                  Каждому пришедшему открыть небеса.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Между небом святым и греховной землёй {'\n'}
                  Пропасть злая лежит, разделяя собой. {'\n'}
                  Хочешь - верь, хочешь - нет, слушай слово {'\n'}
                  Творца: Крест - единственный мост от земли в небеса.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  О, Иисус дорогой, у подножья креста {'\n'}
                  Сквозь седые века я увидел Тебя: {'\n'}
                  На пронзённых руках незастывшая кровь, {'\n'}
                  А в прекрасных глазах Божья к людям любовь.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
