import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity, Modal} from 'react-native';
import { styles } from '../styles';
import { useNavigate } from 'react-router-dom';
import { minor, major, getTon } from '../chords/Chords';
import Music from '../assets/musical-note.png'

export default function VdoliPoViaDolorossa( {namSong} ) {
  
  const navigateTo = useNavigate();
  const isStyle = JSON.parse(localStorage.getItem('isssEnabled'))
  const slide = JSON.parse(localStorage.getItem('SliderValues'));
  const [viewAccordes, setViewAccordes] = useState(true);
  window.scrollTo(0,0)
  const [start, setStart]= useState(0)
  const [ modalOpen , setModalOpen ] = useState (false);

   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigateTo('/')}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
          </TouchableWithoutFeedback>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.concretSong}>{namSong}</Text>
          <TouchableWithoutFeedback style={{paddingBottom: '2px'}} onPress={() => { setModalOpen(!modalOpen)}}>
            <Image  source={Music} style={styles.music} />
          </TouchableWithoutFeedback>
          <Text style={viewAccordes ? styles.MenuAccordesView : styles.MenuAccordesHide} onPress={() =>   setViewAccordes(!viewAccordes)} >A</Text>
       </View>
 
       <View style={modalOpen ? styles.modViewChords : {display:"none"}}>
          <Text style={styles.ChordsEdit1} >
            <Text style={styles.chordsTon} onPress={()=>getTon(-1,{setStart})}>- </Text> {start} <Text onPress={()=>getTon(1,{setStart})}> +</Text>
          </Text>
        </View>

        <ScrollView>
              <Text style={isStyle ? [styles.SongDark, {fontSize: slide}] : [styles.SongLight, {fontSize: slide}]} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>              {minor[8+start]}       {major[6+start]}                {major[4+start]}                {major[3+start]}{'\n'}</Text>
                  Вдоль по Виа Долороса, на Голгофу по пути{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>         {minor[8+start]}                         {major[6+start]}                  {major[4+start]}{'\n'}</Text>
                  К месту казни толпы жаждали пройти{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>     {minor[1+start]}              {minor[8+start]}           {major[10+start]}{'\n'}</Text>               
                  И солдаты расчищали дорогу{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>             {major[3+start]}              {minor[8+start]}{'\n'}</Text>
                  Скорби, грусти и тоски.{'\n'}
                  Кровь текла струёю алой {'\n'}
                  Осуждённого на смерть,{'\n'}
                  Разрывал венец терновый кости твердь{'\n'}
                  И презренье нёс Он тех,{'\n'}
                  Кто кричал, что совершил Он тяжкий грех. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> {major[8+start]}          {minor[1+start]}        {major[3+start]}    {'\n'}</Text>
                  Вдоль по Виа Долороса{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}            {major[8+start]}7{'\n'}</Text>
                  По старадания пути,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>         {minor[1+start]}               {major[3+start]}                      {major[8+start]}7{'\n'}</Text>
                  Шёл Мессия, словно Агнец нас спасти.{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>       {minor[1+start]}                {major[3+start]}                   {minor[8+start]}           {major[6+start]}     {major[4+start]}{'\n'}</Text>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>      {minor[8+start]}                    {major[6+start]}           {major[4+start]}      {major[3+start]}  {minor[8+start]}{'\n'}</Text>
                  Шёл Христос по Долороса за тебя и за меня.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>                                                          
                  Он молчал, Он был спокоен,{'\n'}                                     
                  Хоть устал и изнемог,{'\n'}
                  Так молчать в смиреньи полном мог лишь Бог.{'\n'}
                  Не клемил Он палачей,{'\n'}
                  Но с любовью смотрел Он на людей. {'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев. {'\n'}{'\n'}</Text>

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>  {major[3+start]}                      {major[4+start]}{'\n'}</Text>
                  А солнце палит и небо молчит,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>     {major[6+start]}               {major[3+start]}            {minor[8+start]}  {major[6+start]}    {major[11+start]}   {major[8+start]}{'\n'}</Text>
                  Оставлен Сын Божий Самим Отцом,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}> {major[8+start]}          {minor[1+start]}           {major[3+start]}             {minor[8+start]}                 {major[8+start]}7{'\n'}</Text>               
                  Вдоль по Виа Долороса до холма на всём пути{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>          {minor[1+start]}               {major[3+start]}                {major[8+start]}7 {'\n'}</Text>
                  Капли крови будто маки расцвели,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>      {minor[1+start]}                  {major[3+start]}                   {minor[8+start]}          {major[3+start]}   {minor[8+start]}{'\n'}</Text>
                  Но Он выбрал ту дорогу, чтоб открыть нам небеса,{'\n'}
                  <Text id={viewAccordes ? null : 'AccordesNone'} style={isStyle ? styles.AccordesDark : styles.AccordesLight}>{minor[8+start]}                           {major[6+start]}           {major[4+start]}     {major[3+start]}   {minor[8+start]}{'\n'}</Text>               
                  Шёл Христос по Долороса за меня и за тебя.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

 
     </View>
   );
     
 }
