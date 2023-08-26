import React from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';

export default function SonGodNamRojden({navigation}) {
  
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
                  <Text style={styles.Accordes}>C               F {'\n'}</Text>
                  Сын Божий нам рождён, оставив власть и трон,{'\n'}
                  <Text style={styles.Accordes}>C               G{'\n'}</Text>
                  Без славы в мир пришёл, Всесильный Сам.{'\n'}
                  <Text style={styles.Accordes}>C               F{'\n'}</Text>
                  Вся силы полнота, вся славы красота{'\n'}
                  <Text style={styles.Accordes}>C               G{'\n'}</Text>
                  Явились в эту ночь в Младенце нам.{'\n'}
                  <Text style={styles.Accordes}>F               G{'\n'}</Text>
                  Прийди и посмотри!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>Am      F      G       Em{'\n'}</Text>
                  Христос, Господь, нас грешных спасёт!{'\n'}
                  <Text style={styles.Accordes}>Am      F      G{'\n'}</Text>
                  Божий Сын рождён, как мы!{'\n'}
                  <Text style={styles.Accordes}>Am      F      G       Am{'\n'}</Text>
                  Христос, Господь, наш Царь принял плоть:{'\n'}
                  <Text style={styles.Accordes}>Dm      G      C{'\n'}</Text>
                  Нам рождён Господь Иисус!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Мессия был так мал, когда в хлеву лежал,{'\n'}
                  Рождён, чтоб искупить позорный грех.{'\n'}
                  В хлеву Он мирно спит, но Он соединит{'\n'}
                  Святого Бога и спасённых всех.{'\n'}
                  Прийди и поклонись!{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
