import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function VTebeGospod({navigation}) {
  
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
                  <Text style={styles.Accordes}>F{'\n'}</Text>
                  В тебе, Господь вся жизнь моя {'\n'}
                  <Text style={styles.Accordes}>Gm   F{'\n'}</Text>
                  Поэтому я радуюсь {'\n'}
                  <Text style={styles.Accordes}>Bb   F{'\n'}</Text>
                  С голгофы чистая струя {'\n'}
                  <Text style={styles.Accordes}>C7   F{'\n'}</Text>
                  Живит мой Дух отрадою {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  И я пою Христу пою {'\n'}
                  <Text style={styles.Accordes}>Gm {'\n'}</Text>
                  За нас отдал Он жизнь свою {'\n'}
                  <Text style={styles.Accordes}>C{'\n'}</Text>
                  Шатёр любви, любви святой {'\n'}
                  <Text style={styles.Accordes}>F   Dm {'\n'}</Text>
                  Раздвинул Он над всей землёй {'\n'}
                  <Text style={styles.Accordes}>Dm{'\n'}</Text>
                  И мёдам каплют облака {'\n'}
                  <Text style={styles.Accordes}>Gm{'\n'}</Text>
                  Что держит их Его рука {'\n'}
                  <Text style={styles.Accordes}>C{'\n'}</Text>
                  И солнца свет лучистых глас {'\n'}
                  <Text style={styles.Accordes}>C   F{'\n'}</Text>
                  Он любит как детей всех нас {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Христос однажды целый мир {'\n'}
                  Носил на любящих руках {'\n'}
                  От вечной смерти искупил {'\n'}
                  Христос открыл нам небеса {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Перед Творцом ничтожный я {'\n'}
                  В грехах, повинен смерти был {'\n'}
                  Но кров невинная Христа {'\n'}
                  Дала мне радость, жизнь и мир{'\n'}
              </Text>
        </ScrollView> 

           
 
     </View>
   );
     
 }
