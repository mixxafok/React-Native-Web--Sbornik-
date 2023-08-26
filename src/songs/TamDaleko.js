import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function TamDaleko({navigation}) {
  
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
                  <Text style={styles.Accordes}>Em      G{'\n'}</Text>
                  Там далеко, за облаками,{'\n'}
                  <Text style={styles.Accordes}>C       D{'\n'}</Text>
                  Встретит меня Иисус.{'\n'}
                  <Text style={styles.Accordes}>Em      G{'\n'}</Text>
                  Нежно обнимет Своими руками,{'\n'}
                  <Text style={styles.Accordes}>C       D{'\n'}</Text>
                  С Ним я навеки сольюсь.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G       D       Am       Em{'\n'}</Text>
                  А пока живу я мире странником{'\n'}
                  <Text style={styles.Accordes}>G       D       Am       H{'\n'}</Text>
                  И с тоской смотрю я в небеса.{'\n'}
                  <Text style={styles.Accordes}>G       D       Am       Em{'\n'}</Text>
                  С небом связаны мои желания,{'\n'}
                  <Text style={styles.Accordes}>G       D       Am   (H)   Em{'\n'}</Text>
                  С небом связана моя судьба.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Мне распахнут райские двери ,{'\n'}
                  Радостно скажут: “Входи!”{'\n'}
                  Всё это будет, твёрдо я верю,{'\n'}
                  Но это лишь впереди.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Там навсегда скорби забуду,{'\n'}
                  В небе Господь наш царит.{'\n'}
                  Там с Иисусом вечно я буду {'\n'}
                  В сладком общении жить.{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
