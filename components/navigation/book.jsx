import { View,Image, TouchableOpacity,Text,ScrollView,TouchableWithoutFeedback} from "react-native";
import { Colors, Images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import stylesExplore from "@/styles/stylesExplore";
import { useState } from "react";
import DateRangePicker from 'react-native-daterange-picker'; 
import moment from "moment";
import { useTranslation } from 'react-i18next';
import'../../localization/i18n';
import { IconButton } from 'react-native-paper';
import { Modal } from 'react-native-paper';
import {  useNavigation } from '@react-navigation/native';

export default function Book(){
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [displayedDate, setDisplayedDate] = useState(moment());
    const [rooms, setRooms] = useState([{ "adult": 2, "children": 0 }]);
    const [inDate, setInDate] = useState(null);
    const [outDate, setOutDate] = useState();
    const[openIn,setOpenIn]= useState(false);
    const[openOut,setOpenOut]= useState(false);

 
    const previousMonth = () => {
        setDisplayedDate(moment(displayedDate).subtract(1, "months"))
    };
    const nextMonth = () => {
        setDisplayedDate(moment(displayedDate).add(1, "months"))
    };  
    const increaseAdult = (index) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index].adult < 4)
            updatedRooms[index].adult += 1;
        setRooms(updatedRooms);
    };
    const decreaseAdult = (index) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index].adult>0)
            updatedRooms[index].adult -= 1;
        setRooms(updatedRooms);
    };
    const increaseChildren = (index) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index].children < 4){
            updatedRooms[index].children += 1;
            updatedRooms[index][`child${updatedRooms[index].children}`] = 0;
        }
        setRooms(updatedRooms);
    };
    const decreaseChildren = (index) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index].children>0){
            updatedRooms[index].children -= 1;
            updatedRooms[index][`child${updatedRooms[index].children + 1}`] = undefined; 
        }
        setRooms(updatedRooms);
    };
    const increaseChildVariable = (index, childIndex) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index][`child${childIndex + 1}`]<18)
            updatedRooms[index][`child${childIndex + 1}`] += 1;
        setRooms(updatedRooms);
    };
    const decreaseChildVariable = (index, childIndex) => {
        const updatedRooms = [...rooms];
        if(updatedRooms[index][`child${childIndex + 1}`]>0)
            updatedRooms[index][`child${childIndex + 1}`] -= 1;
        setRooms(updatedRooms);
    };
    const addRoom = () => {
        const newRoom = { "adult": 2, "children": 0 };
        setRooms([...rooms, newRoom]);
    };
    const deleteRoom = (index) => {
        if (rooms.length > 1) {
            const updatedRooms = [...rooms];
            updatedRooms.splice(index, 1);
            setRooms(updatedRooms);
        }
    };



    return (
        <View style={{height:"100%",width:"100%",backgroundColor:Colors.white}}>
            <Image source={Images.bookingHotel} style={stylesExplore.containerImageBook}/>
            <TouchableOpacity style={stylesExplore.iconBack} onPress={() => { navigation.goBack()}}>
                <Ionicons name='arrow-back' size={28} color={Colors.titleGrey} />
            </TouchableOpacity>
            <ScrollView style={{paddingLeft:20,paddingRight:20}}>
                <View style={{paddingTop:20,paddingLeft:10}}>  
                    <Text style={stylesExplore.textStyle}>{t("screens.explore.text.in")}</Text>
                </View>
                <TouchableOpacity onPress={()=>setOpenIn(true)}>
                    <View style={stylesExplore.containerDate}>
                        <Ionicons name='calendar-outline' size={22} color={Colors.grey}/>
                        <Text style={stylesExplore.textField}>{ inDate==null ? t("screens.explore.text.selectDateInOrOut"): moment(inDate).format("D MMM Y")}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{paddingTop:10,paddingLeft:10}}>
                    <Text style={stylesExplore.textStyle}>{t("screens.explore.text.out")}</Text>
                </View>
                <TouchableOpacity onPress={()=>setOpenOut(true)}>
                    <View style={stylesExplore.containerDate}>
                        <Ionicons name='calendar-outline' size={22} color={Colors.grey}/>
                        <Text style={stylesExplore.textField}>{ outDate==null ? t("screens.explore.text.selectDateInOrOut"): moment(outDate).format("D MMM Y")}</Text>
                    </View>
                </TouchableOpacity>
                {rooms.map((room, index) => (
                    <View key={`room${index}`} style={stylesExplore.containerRoom}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
                            <View>
                                <Text style={stylesExplore.textStyle}>Adult</Text>
                                <View style={stylesExplore.field}>
                                    <IconButton icon="minus"  onPress={() => decreaseAdult(index)} iconColor={Colors.grey} size={16}/>
                                    <Text style={stylesExplore.number}>{room.adult}</Text>
                                    <IconButton  icon="plus" onPress={() => increaseAdult(index)} iconColor={Colors.grey} size={16}/>
                                </View>
                            </View>
                            <View>
                                <Text style={stylesExplore.textStyle}>{t("screens.explore.text.children")}</Text>
                                <View style={stylesExplore.field}>
                                    <IconButton icon="minus"  onPress={() => decreaseChildren(index)} iconColor={Colors.grey} size={16}/>
                                    <Text style={stylesExplore.number}>{room.children}</Text>
                                    <IconButton  icon="plus" onPress={() => increaseChildren(index)} iconColor={Colors.grey} size={16}/>
                                </View>
                            </View>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {[...Array(room.children)].map((_, childIndex) => (
                                <View  key={`child${childIndex}`}>
                                    <Text style={stylesExplore.textStyle}>{t("screens.explore.text.child")} {childIndex + 1 }</Text>
                                    <View style={stylesExplore.containerChild}>
                                        <IconButton icon="minus"  onPress={() => decreaseChildVariable(index, childIndex)} iconColor={Colors.grey} size={16}/>
                                        <Text style={stylesExplore.number}>{room[`child${childIndex + 1}`]}</Text>
                                        <IconButton  icon="plus" onPress={() => increaseChildVariable(index, childIndex)} iconColor={Colors.grey} size={16}/>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                ))}
                <View style={{paddingTop:5,paddingBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>addRoom()}>
                    <Text style={stylesExplore.textRoom}> {t("screens.explore.text.addRoom")}</Text>
                    </TouchableOpacity>
                    {rooms.length > 1 &&(
                        <TouchableOpacity onPress={()=>deleteRoom()}>
                            <Text style={stylesExplore.textRoom}> {t("screens.explore.text.removeRoom")}</Text>
                        </TouchableOpacity> 
                    )}
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("payment")}>
                        <View style={stylesExplore.botton}>
                            <Text style={stylesExplore.textBotton}> {t("screens.explore.text.find")}</Text>
                        </View>
                    </TouchableOpacity> 
                </View>
            </ScrollView>
            {openIn && (
                <Modal visible={openIn} animationType="fade">
                    <TouchableWithoutFeedback onPress={()=>setOpenIn(false)}>
                        <View style={{height:'100%', width:"100%"}} />
                    </TouchableWithoutFeedback>
                    <DateRangePicker
                        open={openIn}
                        key="inDate"
                        selectedStyle={{backgroundColor:Colors.vert}}
                        date={inDate}
                        onChange={(date) => {
                            if (date && date.date) {
                                setInDate(new Date(date.date)); 
                            }
                        }}
                        minDate={new Date()}
                        monthPrevButton={<TouchableOpacity onPress={()=>{previousMonth()}}><Ionicons name='chevron-back-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                        monthNextButton={<TouchableOpacity onPress={()=>{nextMonth()}}><Ionicons name='chevron-forward-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                        children={<View/>}
                        displayedDate={displayedDate}
                        backdropStyle={{height:50, backgroundColor:Colors.transparent}}
                    />
                </Modal>
            )}
             {openOut && (
                <Modal visible={openOut} animationType="fade">
                    <TouchableWithoutFeedback onPress={()=>setOpenOut(false)}>
                        <View style={{height:'100%', width:"100%"}} />
                    </TouchableWithoutFeedback>
                    <DateRangePicker
                        open={openOut}
                        key="outDate"
                        selectedStyle={{backgroundColor:Colors.vert}}
                        date={outDate}
                        onChange={(date) => {
                            if (date && date.date) {
                                setOutDate(new Date(date.date)); 
                            }
                        }}
                        minDate={new Date()}
                        monthPrevButton={<TouchableOpacity onPress={()=>{previousMonth()}}><Ionicons name='chevron-back-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                        monthNextButton={<TouchableOpacity onPress={()=>{nextMonth()}}><Ionicons name='chevron-forward-outline' size={20} color={Colors.grey} /></TouchableOpacity>}
                        children={<View/>}
                        displayedDate={displayedDate}
                        backdropStyle={{height:50, backgroundColor:Colors.transparent}}
                    />
                </Modal>
            )}
        </View>
    )
}