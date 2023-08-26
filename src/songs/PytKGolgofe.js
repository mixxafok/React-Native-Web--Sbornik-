import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function PytKGolgofe({navigation}) {
  
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
                  <Text style={styles.Accordes}>Am                                C{'\n'}</Text>
                  Путь к Голгофе далёк, кровь стекала из ран,{'\n'}
                  <Text style={styles.Accordes}>Dm       E         Am{'\n'}</Text>
                  Сколько мук и страданий во взоре…{'\n'}
                  <Text style={styles.Accordes}>Am                   C{'\n'}</Text>
                  Иисус дорогой умирал на кресте,{'\n'}
                  <Text style={styles.Accordes}>Dm         E            Am{'\n'}</Text>
                  Принял тяжкие муки и горе.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>F       G     Em            Am{'\n'}</Text>
                  Никогда не смогу я забыть этот крест,{'\n'}
                  <Text style={styles.Accordes}>Dm       E           Am{'\n'}</Text>
                  Он стоит между небом, землею.{'\n'}
                  <Text style={styles.Accordes}>F             G         Em           Am{'\n'}</Text>
                  Своей смертью Христос примирил нас с Творцом,{'\n'}
                  <Text style={styles.Accordes}>Dm        E       Am{'\n'}</Text>
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
                  По земле среди бурь, среди гроз.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
