import React, { useState} from 'react';
 
 import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';

export default function EstiNaNebeGorod(  ) {
  
  const navigateTo = useNavigate();
 const [isStyle, getIsStyle] = useState(JSON.parse(localStorage.getItem('isssEnabled'))) 

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() =>   navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={isStyle ? styles.SongDark : styles.SongLight} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am       Dm    E       Am {'\n'}</Text>
                  Есть на небе город, чудный город света,{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>F    G       C {'\n'}</Text>
                  Там нужды болезни и печали нету.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am       Dm   G       C {'\n'}</Text>
                  Там Живут святые, там играют гусли, {'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am        E {'\n'}</Text>
                  Воспевая славу Господу Иисусу.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am       Dm {'\n'}</Text>
                  Болезни там нет, не гаснет там свет, Иерусалим.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>G       C       E{'\n'}</Text>
                  Там вечно живут, там песни поют, Иерусалим.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am       Dm {'\n'}</Text>
                  Ты город живых, ты город святых, Иерусалим.{'\n'}
                  <Text style={isStyle ? styles.AccordesDark : styles.AccordesLight}>Am       E       Am    Dm {'\n'}</Text>
                  К тебе я стремлюсь, с тобой я сольюсь, Иерусалим.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Золотом обложен город тот прекрасный,{'\n'}
                  Лишь в тебе, Иерусалим, вечно буду счастлив.{'\n'}
                  Жизнь мою преобрази здесь, в земной долине,{'\n'}
                  Чтоб покой душе найти в Иерусалиме.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Братья мои, сёстры, там мы будем вместе{'\n'}
                  Воспевать Иисусу радостные песни.{'\n'}
                  Так давайте ж на земле вместе славить Бога,{'\n'}
                  Чтобы стала нам светлей в небеса дорога.{'\n'}{'\n'}

              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
